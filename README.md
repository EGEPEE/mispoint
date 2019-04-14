# MIS Point
This repository is about app which calculate customers' point, we use ERPNext to build this project.

------
# Feature
#### Calculate Point
#### Claim Point
#### Print Format 

------
# Workflow 
![alt text](https://github.com/EGEPEE/mispoint/blob/master/assets/workflow.png "Workflow MISPoint")

------
# Team & Branch
| Name          | Github                                             | Branch        | 
| ------------- |:--------------------------------------------------:|:-------------:|
|               | 	                                                 | Master        |
| Dimas         | [dshirogami](https://github.com/dshirogami)        |               |
| Ega           | [EGEPEE](https://github.com/EGEPEE)                |               |
| Renvil        | [schlucy](https://github.com/schlucy)              |               |
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
    * *Default setting like Note*
    * Active developer mode on path **/sites/sites_config.json**, add: `"developer_mode": 1,` after db_password
2. Existing Project
    * Open your existing project **Optional : `cd /opt/erpnext/mispoint`**
    * Get **point app**: `bench get-app appname https://github.com/EGEPEE/mispoint.git`
    * Install point app: `bench install-app point`
    * Run server: `bench start`
    * Open new terminal on project path
    * Migrate app: `bench migrate`
4. Check your app, it will exist in Doctype -- Module

------
# Pull Repository
1. Open point app **Optional : `cd /opt/erpnext/mispoint/apps/point`**
2. Pull repo: `git pull` or `git fetch`
3. Run server: `bench start`
4. Open new terminal on project path
5. Migrate app: `bench migrate`
6. Check your app in the Doctype

------
# Push Repository
1. Open point app **Optional : `cd /opt/erpnext/mispoint/apps/point`**
2. Add all file: `git add .`
3. Commit your file to repo: `git commit -m "**summary your file which had a modified data**"`. Ex: *git commit -m "modified readme.md"*
4. Push to repository: `git push`

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
4. Don't forget to add developer mode!
4. Don't forget to add naming series **Master Member, Master Item, Master Transaksi**

------
# License

MIT
