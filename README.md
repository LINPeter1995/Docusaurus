# 個人技術部落格網址

https://linpeter1995.github.io/Docusaurus/

# 確保 main 分支有最新內容

git checkout main

git pull origin main

# 切到部署分支

git checkout gh-pages

# 合併main分支

git merge main

# 推送 gh-pages 分支到 GitHub

git push origin gh-pages

# 如果 Git 拒絕你推送，可以加上 --force：

git push --force origin gh-pages

# 部署命令

git checkout main

$env:GIT_USER="LINPeter1995"

npm run deploy

# 這段等同於：

# 自動建構靜態檔案（npm run build）

# 自動將內容推送到 gh-pages 分支（透過 gh-pages 套件）
