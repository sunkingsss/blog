<!-- @format -->

Git

https://juejin.im/post/6844903895160881166

git clone 慢

将地址连接中的 github.com 替换为 github.com.cnpmjs.org

提交步骤

https://zybuluo.com/wangwangheng/note/53297

0、git pull 每次修改之前更新代码；

git stash // 有冲突时，暂存更改,可选，

git stash pop // 解决完冲突，可选，还原更改

1、git status // 列出有哪些更改

2、git add

-   2.1 git add . 添加全部(不包含删除的文件)
-   2.2 git add -u 仅包含 tracked 文件，不包含新增文件
-   2.3 git add -A 所有文件
-   2.4 git add 文件名 ：添加单独文件

3、git commit -a -m “备注”

git fetch 可选

4、git pull --rebase

​ 4.1 如果有冲突，解决完冲突之后，先执行 git add . ,在执行 git rebase —continue,

git reabse —continue 会自动完成 git commit ，所以不用手动执行 git commit

5、git push

6、git diff

-   6.1 查看指定 commit 修改的文件列表 git diff --name-only <commit_id>
-   6.2 git diff --cached 或 git diff --staged：显示暂存区(已 add 但未 commit 文件)和最后一次 commit(HEAD)之间的所有不相同文件的增删改(git diff --cached 和 git diff –staged 相同作用)

7、git log git show

-   7.1 查看一个文件的历史提交信息，git log 文件名
-   7.2 查看某个版本文件修改情况, git show <commit_id> 文件名

· git add -A 提交所有变化 · git add -u 提交被修改(modified)和被删除(deleted)文件，不包括新文件(new) · git add . 提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件

将当前分支合并分支到主分支切换到主分支，然后将其他的分支合并到主分支 git checkout branchA // 切换到其他分支 git pull origin branchA // 拉取更新 git chechkout master // 切换到主分支 git pull origin master // 更新 master 分支 git merge branchA // 将 branchA 合并到主分支 git push

将 master 分支更新到当前分支 git checkout master git pull origin master git checkout branchB git pull branchB git merge master

git 常用操作 git checkout -b branchA // 生成分支 A git pull origin branchA // 获取远程分支 A 的更新到本地分支 A 上

git cherry-pick 提交的 hash 值 // 将指定的更新，合并到当前分支 git cherry-pick 之后，直接使用 git push origin currentBranch 推送到当前的分支

合并提交记录 git rebase -i HEAD~4 将最近的 4 条提交记录合并为一条

用于将本地分支和远程的 master 分支不同步的时候,将远程分支更新拉取到本地分支 git checkout feature git rebase master 表示以 master 为基础，将 feature 分支上的修改增加到 master 分支上，以合并后的版本，生成新的版本，并且会抹掉 feature 的提交记录，避免出现提交记录分叉，具体情况如下

1、"feature"分支里的每个提交(commit)取消掉（就看不到分叉的提交记录了）； 2、并且把它们临时保存为补丁(patch)(这些补丁放到".git/rebase"目录中), 3、然后把"feature"分支更新 为最新的"origin"分支，最后把保存的这些补丁应用到"feature"分支上。 4、此时就会指向最新的提交记录。

git reset HEAD 文件 // 回退到当前版本，放弃缓存区的修改 git reset --hard 提交版本号：将当前分支重置为指定版本。

本地 git 操作出现 443，将全局的地址修改为

> git config --global remote.origin.url "https://github.com.cnpmjs.org/JJFranklin/FE_markdown.git"

core.quotepath=false user.email=JJFranklin@https://github.com user.name=JJFranklin remote.origin.url=https://github.com.cnpmjs.org/JJFranklin/FE_markdown.git http.sslbackend=openssl
