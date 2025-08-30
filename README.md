# ICScreator-browser-plugin

Note that  this is under a strong copyleft license.

The files was coded using refined prompts with Copilot GPT 4.1 and date issues were fixed with Gemini Flash 2.5 Pro. This means you should expect the code to be of poor quality, uninutitive, and wasteful. But it's functional.

This should only be used for educational purposes.

# Installation Instructions

Instructions are given below. There are also video links if you can't read.

## Chrome (<2mins)
Download the above or use this direct download link for [chrome.zip](https://raw.githubusercontent.com/mateenshaikh/ICScreator-browser-plugin/main/chrome.zip) file. 
Install the chrome plugin using the folder above. You can download the folder as a zip then unzip it and load it as a temporary extension. If you don't know how, here are instructions. 
  1. Go to chrome://extensions
  2. At the top right, Toggle on "Developer mode"
  3. At the top left, click the "Unpack extension" button
  4. Go into the unzipped folder (it will appear blank when you go in)
  5. There are no files to select, just click "Select Folder" without selecting a file once you're in the folder.
  6. Leave the browser open while you use the plugin. 

 [https://media.tru.ca/media/install%20chrome%20temporarily/0_n5dac6o0](https://media.tru.ca/media/install%20chrome%20temporarily/0_n5dac6o0)

## Firefox
The extension was tentatively approved so you can download the XPI file above. Then drag it into a new firefox window and it'll install. 

# Usage Instructions
## Generate the ICS file from the week at a glance (<2mins)
  1. Go to TRUEmployee
  2. Go to Week at a glance
  3. Change the date to a week that's a full week (usually the second week of the fall/winter semester)
  4. Click the extension button
  5. Enter the first/last day of classes according to https://www.tru.ca/current/enrolment-services/dates-deadlines.html
  6. Create the ICS file and download it somewhere for the next step.

Video: [https://media.tru.ca/media/use+the+extension+to+download+the+ics+file/0_1y93jmji](https://media.tru.ca/media/use+the+extension+to+download+the+ics+file/0_1y93jmji)
 
## Load the calendar events (<2mins)
  7. In Outlook, go to your calendar
  8. Click Add Calendar
  9. In the new window, click Upload from file
  10. Use the file chooser to find the .ICS file you downloaded previously
  11. Select the calendar you want to enter it
      - This should be "Calendar" because that's what outlook looks at to schedule meetings and kind of the whole point of this
  12. Click Import. Once loaded, you can delete the ICS file.

Video: [https://media.tru.ca/media/import+into+outlook/0_nnx7m3aw](https://media.tru.ca/media/import+into+outlook/0_nnx7m3aw)

# Other notes
 - Manually remove holidays. To delete a single instance in outlook, click the event, then click delete, then click "This Event". If you use the keyboard delete button, it may delete the whole series, or all the events after the particular instance one you selected.
 - If one class time/location changes, its easier to just change the event in Outlook. Click the event, click Edit, and either "All Events in the Series" or "This and All Following Events". Then change the time/location as appropriate. Note that if it's repeating, the end date may default to 6 months away, so you might have to respecify the last meeting.
 - You can categorize them for colour coding, etc.. You'll still have to do it for each event in the week by changing "All Events in the Series" as described above. But that's better than doing it for all every single meeting in the semester.
