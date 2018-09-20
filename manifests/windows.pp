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

class node_modules_dir {
  # Soft link trick to get over windows' limit of long file names
  file { '/home/vagrant/node_modules':
    ensure => 'directory',
    group  => 'vagrant',
    owner  => 'vagrant',
  }
  file { '/vagrant/node_modules':
      ensure   => 'link',
      target   => '/home/vagrant/node_modules',
      require  => File['/home/vagrant/node_modules'],
  }
}

include node_modules_dir