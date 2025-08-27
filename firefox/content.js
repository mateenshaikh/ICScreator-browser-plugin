chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "export_ics") {
      showExportModal((timezone, recurStart, recurEnd) => {
        const events = extractEvents();
        if (events.length > 0 && recurStart && recurEnd) {
          const ics = buildICS(events, recurStart, recurEnd, timezone);
          downloadICS(ics);
        } else {
          alert('No events found or missing dates.');
        }
      });
    }
  });
  
  function pad(n) { return n < 10 ? '0' + n : n; }
  
  function toICSDate(dateStr, timeStr) {
    // dateStr: MM/DD/YYYY, timeStr: HH:MM-HH:MM
    const [month, day, year] = dateStr.split('/');
    const [start, end] = timeStr.split('-');
    const [startH, startM] = start.split(':');
    const [endH, endM] = end.split(':');
    // ICS format: YYYYMMDDTHHMMSS
    const dtStart = `${year}${pad(month)}${pad(day)}T${pad(startH)}${pad(startM)}00`;
    const dtEnd = `${year}${pad(month)}${pad(day)}T${pad(endH)}${pad(endM)}00`;
    return {dtStart, dtEnd};
  }
  
  function extractEvents() {
    const events = [];
    document.querySelectorAll('.fc-content').forEach(eventElement => {
      const titleElement = eventElement.querySelector('.fc-title');
      const ariaText = titleElement.querySelector('.sr-only').textContent;
  
      // Extract title: e.g., "STAT3060 -S01"
      const titleMatch = titleElement.innerHTML.match(/([A-Z]+\s*\d+\s*-\s*S\d+)/);
      const titleText = titleMatch ? titleMatch[1].replace(/\s+/g, '') : '';
  
      // Extract location: e.g., "OM-2642"
      const venueMatch = ariaText.match(/Venue([A-Z]+-\d+)/);
      const locationText = venueMatch ? venueMatch[1].trim() : '';
  
      const dateMatch = ariaText.match(/Date(\d{2}\/\d{2}\/\d{4})/);
      const timeMatch = ariaText.match(/Time([\d:]+-[\d:]+)/);
  
      if (dateMatch && timeMatch) {
        const {dtStart, dtEnd} = toICSDate(dateMatch[1], timeMatch[1]);
        events.push({
          title: titleText,
          location: locationText,
          dtStart,
          dtEnd,
          originalDate: dateMatch[1] // Save for RRULE
        });
      }
    });
    return events;
  }
  
  function buildICS(events, recurStart, recurEnd, timezone) {
    let ics = `BEGIN:VCALENDAR
  VERSION:2.0
  PRODID:-//Schedule Exporter//EN
  CALSCALE:GREGORIAN
  X-WR-TIMEZONE:${timezone || 'America/Vancouver'}
  `;
    events.forEach(ev => {
      let rrule = '';
      if (recurStart && recurEnd) {
        // RRULE: FREQ=WEEKLY;UNTIL=YYYYMMDDT235959Z
        const until = recurEnd.replace(/-/g, '') + 'T235959Z';
        rrule = `RRULE:FREQ=WEEKLY;UNTIL=${until}\n`;
      }
      ics += `BEGIN:VEVENT
  SUMMARY:${ev.title}
  LOCATION:${ev.location}
  DTSTART;TZID=${timezone || 'America/Vancouver'}:${ev.dtStart}
  DTEND;TZID=${timezone || 'America/Vancouver'}:${ev.dtEnd}
  ${rrule}END:VEVENT
  `;
    });
    ics += 'END:VCALENDAR';
    return ics;
  }
  
  function downloadICS(icsContent) {
    const blob = new Blob([icsContent], {type: 'text/calendar'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'schedule.ics';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }
  
  function showExportModal(onSubmit) {
    // Remove existing modal if present
    const oldModal = document.getElementById('ics-export-modal');
    if (oldModal) oldModal.remove();
  
    const modal = document.createElement('div');
    modal.id = 'ics-export-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.3)';
    modal.style.zIndex = '9999';
    modal.innerHTML = `
      <div style="background:#fff;padding:24px;border-radius:8px;max-width:350px;margin:100px auto;box-shadow:0 2px 8px #0003;">
        <h2 style="margin-top:0;">Export to ICS</h2>
        <label>Timezone:
          <select id="ics-timezone">
            <option value="America/Vancouver" selected>America/Vancouver</option>
            <option value="America/Toronto">America/Toronto</option>
            <option value="America/Los_Angeles">America/Los_Angeles</option>
            <option value="UTC">UTC</option>
          </select>
        </label>
        <br><br>
        <label>Start Date: <input type="date" id="ics-start"></label>
        <br><br>
        <label>End Date: <input type="date" id="ics-end"></label>
        <br><br>
        <button id="ics-export-btn">Export</button>
        <button id="ics-cancel-btn" style="margin-left:10px;">Cancel</button>
      </div>
    `;
    document.body.appendChild(modal);
  
    document.getElementById('ics-export-btn').onclick = () => {
      const timezone = document.getElementById('ics-timezone').value;
      const start = document.getElementById('ics-start').value;
      const end = document.getElementById('ics-end').value;
      modal.remove();
      onSubmit(timezone, start, end);
    };
    document.getElementById('ics-cancel-btn').onclick = () => modal.remove();
  }