# MIS Point
This repository is about app which calculate customers' point, we use ERPNext to build this project.

------
# Feature
* Calculate Point
* On Progress

------
# Team & Branch
| Name          | Github                                             | Branch        | 
| ------------- |:--------------------------------------------------:|:-------------:|
|               | Master                                             | Master        |
|               | DevProcess                                         | DevProcess    |
| Dimas         | [dshirogami](https://github.com/dshirogami)        |               |
| Ega           | [EGEPEE] (https://github.com/EGEPEE)               |               |
| Renvil        |                                                    |               |
| Reza          | [RezzaACM](https://github.com/RezzaACM)            |               |

------
# Sync Point App to Your Project
1. New Project
    * Make new project **Optional: name project mispoint**: `bench init mispoint --frappe-path https://training@dev.azure.com/devmis004/frappe-training/_git/frappe-training`
    * Open folder: `cd mispoint`
    * Bench new site **Optional: mis.point.com**: `bench new-site mis.point.com`
    * Get erpnext app: `bench get-app erpnext https://training@dev.azure.com/devmis004/erpnext-training/_git/erpnext-training`
    * Install erpnext app: `bench --site mis.point.com install-app erpnext`
    * Check your project: `bench start`
    *Default setting like Note*
2. Existing Project
    * Open your existing project **Optional : `cd /opt/erpnext/mispoint`**
    * Get **point app**: `bench get-app appname https://github.com/EGEPEE/mispoint.git`
    * Install point app: `bench install-app point`
    * Run server: `bench start`
    * Open new terminal on project path
    * Migrate app: `bench migrate`
3. Check your app, it will exist in Doctype -- Module

------
# Note
1. Setup Wizard
    * Full name: Admin MIS
    * Email: admin@gmail.com
    * Password: 123
2. Login 
    * Username/email: Administrator
    * Password: 123
3. Installed
    * App/Module: Point
    * Site: mis.point.com
    
------
# Workflow 
#### On Progress

# License

MIT
