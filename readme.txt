Instructions for running it:

1) clone the project locally : git clone https://github.com/NicolasFonte/sticket-notes.git .
2) make sure you have mysql installed and running and run the dumpfile for creating table. Current one is : dump20160327.sql

3) Under project libraries download libraries with 'npm install'

4) execute the application with 'node app.js'

5) Go to web-browser and type http://localhost:3000/postit . You should see empty notes

6) Click on add a note setting color, text, name and position in screen. Click save. You will be back to first page with your post it loaded.


Missing
 - Add drag and drop for note position and update db.
 - Integrate login page done in different branch
