/*Copyright 2016 Wipro Limited, NIIT Limited

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

This code is written by Prateek Reddy Yammanuru, Shiva Manognya Kandikuppa, Uday Kumar Mydam, Nirup TNL, Sandeep Reddy G, Deepak Kumar*/

var express = require('express');
var router = express.Router();
var organizationModel = require('../models/dbConfig.js').organizationModel;
/* GET home page. */
router.get('/', function(req, res) {
  console.log("data from config.js",config);
  console.log(req.session.user.organization);
  organizationModel.findOne({ 'organizationName' :  req.session.user.organization }, function(err, organizationName) {
    if (err || !organizationName){
      res.json("Yet to configure");
      return;
    }
    var userconfig = JSON.parse(JSON.stringify(config));
    console.log(userconfig.dashboard,"----------------------------");
    userconfig.dashboard=[];
    for (var i = 0; i < organizationName.services.length; i++) {
      if(organizationName.services[i]=="git"){
        userconfig.dashboard.push({ target: '#gitLogStatistics',
        selection: 'gitLogStatistics',
        name: 'Git Log Statistics' });
        console.log("git");
      }
      else if (organizationName.services[i]=="nginx") {
        userconfig.dashboard.push({ target: '#logListing',
        selection: 'nginxLogStatistics',
        name: 'Nginx Log Statistics' });
        console.log("ng");
      }
      else if (organizationName.services[i]=="appgit") {
        userconfig.dashboard.push({ target: '#requestrate',
        selection: 'aptLogStatistics',
        name: 'Apt Log Statistics' });
        console.log("app");
      }
    }
    console.log(userconfig);
    res.json(userconfig);
  });
});

module.exports = router;