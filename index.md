### Improving the ZOO Brno Mobile Application
This is onepage site serving as a description of improving application for ZOO Brno.

*This is a school project (fi.muni.cz && PB138).*


### Goals
1. improve current GUI -> get it closer to modern style that is used these days, which can be observed at all screen sizes nicely

2. add a feature to update its texts and images when new version is available online (old version has all data imported and when somethings is changed, the application has to be re-released in a new (sub)version)

### Solution
1. GUI improved for better readability. GUI is now more responsive (ergo better accessible on tablets).

2. Used couchDB/pouchDB combination for easier data exchange. Database handles all the required features - easy access, time stamping (to keep the amount of transferred data at minimum),...  


### Documentation & Authors
... please refer to the [Wiki page](https://github.com/kaprijela/zobro2/wiki)

### Final Reports
All final reports can be found in the `_reports` folder [here](https://github.com/kaprijela/zobro2/tree/master/_reports).

You can also view its HTML form:
- [Gabriela Kandová](https://cdn.rawgit.com/kaprijela/zobro2/e772559f/_reports/kandova.html)
- [Marek Pastierik](https://cdn.rawgit.com/kaprijela/zobro2/e772559f/_reports/pastierik.html)
- [Tomáš Flimel](https://cdn.rawgit.com/kaprijela/zobro2/e772559f/_reports/flimel.html)
- [Šimon Berka](https://cdn.rawgit.com/kaprijela/zobro2/e772559f/_reports/berka.html)

### Database structure
Every animal has to contain specific information. You can examine the template below, or see a full file example [here](https://github.com/kaprijela/zobro2/blob/dbfiles/db-files/exampleAnimal.json).

```
{
   "_id" : "alpaka",
   "facts" : {
   },
   "images" : [
      {
         "full" : "data:image/jpg;base64,/9j/4AA...",
         "thumbnail" : "data:image/jpg;base64,/9j/4AB..."
      }
   ],
   "text_adult" : [
      "text string"
   ],
   "text_child" : [
      "text string with",
      "<Text style={styles.strong}>formatting</Text>"
   ]
}

```

### Application required permissions
*(Android only)*  
- storage access is required by the PouchDB which stores all required texts and images
- camera access - the application is able to scan QR codes
- full network access is required for data updates

### Application Download
Stable application can be downloaded from [Play Store](https://play.google.com/store/apps/details?id=com.zoobrno). This testing version needs to be downloaded from the [GitHub repository](http://github.com/kaprijela/zobro2).
