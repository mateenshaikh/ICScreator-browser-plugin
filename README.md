# ICScreator-browser-plugin

Note that  this is under a strong copyleft license.

The files were individually  built using refined prompts with Copilot GPT 4.1

# Installation Instructions
Install the plugin for either Chrome or firefox.

## Chrome
Install the chrome plugin using the folder above. You can download the folder as a zip. You don't have to unzip it. Then load it as a temporary extension. If you don't know how, here's a video how to:



## Firefox
The extension was tentatively approved so you can download the XPI file above. Then drag it into a new firefox window and it'll install. 

# Usage Instructions
## Generate the ICS file from the week at a glance
  1. Go to TRUEmployee
  2. Go to Week at a glance
  3. Change the date to a week that's a full week (usually the second week of the fall/winter semester)
  4. Click the extension button
  5. Enter the first/last day of classes according to https://www.tru.ca/current/enrolment-services/dates-deadlines.html
  6. Create the ICS file and download it somewhere.
## Load the calendar events
  7. In Outlook, go to your calendar
  8. Click Add Calendar
  9. In the new window, click Upload from file
  10. Use the file chooser to find the .ICS file you downloaded previously
  11. Select the calendar you want to enter it
      - This should be "Calendar" because that's what outlook looks at to schedule meetings and kind of the whole point of this
  12. Click Import.

# Other notes
 - Manually remove holidays. To delete a single instance in outlook, click the event, then click delete, then click "This Event". If you use the keyboard delete button, it may delete the whole series, or all the events after the particular instance one you selected.
 - If one class time/location changes, its easier to just change the event in Outlook. Click the event, click Edit, and either "All Events in the Series" or "This and All Following Events". Then change the time/location as appropriate. Note that if it's repeating, the end date may default to 6 months away, so you might have to respecify the last meeting.
 - You can categorize them for colour coding, etc.. You'll still have to do it for each event in the week by changing "All Events in the Series" as described above. But that's better than doing it for all every single meeting in the semester.
