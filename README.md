# 個人技術分享部落格

npm run build

npm run deploy

# main(主開發分支)

# gh-pages(部署網站的分支)

切換到 gh-pages 分支：

git checkout gh-pages

合併 main 分支：

git merge main

推送：

git push origin gh-pages

總結：

分離開發與部署：開發過程和網站部署在不同的分支上，這樣有助於避免混亂，也能讓代碼更乾淨。

靈活的部署流程：你可以隨時根據需要更新 gh-pages 分支的內容，而不會影響 main 分支的開發進程。
