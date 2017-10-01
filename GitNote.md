## Git常用总结

### 文件操作

* `ls` 列出当前目录下所有文件(不包含 . .. )
* `ls -a` 列出当前目录下所有文件(包含 . .. )
* `touch` [name.后缀] 在当前目录下创建新的文件

### Git常用命令

#### 配置

* `git config --global user.name 'name'` 配置用户名
* `git config --global user.email 'email@example.com'` 配置邮箱地址

#### 新建代码库

* `git init` 将当前目录初始化为 git 仓库，创建完成后会在当前文件夹下生成一个 .git 文件夹
* `git clone [url]` 拷贝一个Git仓库到本地

#### 增加/删除文件

* `git add [文件名.后缀] [文件名.后缀] ...` 添加若干个文件到暂存区
* `git add .` 添加当前目录下所有文件到暂存区
* `git rm [文件名.后缀]` 将文件从暂存区和硬盘中删除
* `git rm --cached [文件名.后缀]` 将文件从暂存区中删除

#### 代码提交

* `git commit -m '描述信息'` 使用 git add 命令将内容存入暂存区，而执行 git commit 将暂存区的内容添加到仓库中。Git 为你的每一次提交都记录你的名字与邮件地址。
* `git commot -am '描述信息'` 提交暂存区和提交仓库区一起执行
* `git commit [file1] [file2] ... -m [message]` 提交暂存区的指定文件到仓库区

#### 分支

* `git branch` 列出本地所有的分支
* `git branch -r` 列出远程所有分支
* `git branch -a` 列出本地和远程的所有分支
* `git branch [branch-name]` 新建一个分支，但是依然停留在当前分支
* `git checkout -b [branch-name]` 新建一个分支，并且切换到该分支
* `git checkout [branch-name]` 切换到指定分支，并且更新工作区
* `git checkout -` 切换到上一个分支
* `git merge [branch-name]` 合并指定分支到当前分支
* `git branch -d [branch-name]` 删除分支
* `git push origin --delete [branch-name]` 删除远程分支


#### 查看信息
* `git status` 显示有变更的文件
* `git status -s` 显示文件状态，A表示已经添加到暂存区，AM表示添加到暂存区后又有变动。
* `git log` 显示当前分支的版本历史
* `git log --stat` 显示commit历史，以及每次commit发生变更的文件
* `git log -p [file]` 显示指定文件相关的每一次diff
* `git blame [file]` 显示指定文件是什么人在什么时候修改过
* `git diff` 显示工作区与暂存区的差异。查看尚未暂存的改动
* `git diff --cached [file]` 显示暂存区与上一个commit之间的差异
* `git diff HEAD` 查看已暂存和未暂存的所有改动
* `git diff --stat` 显示摘要而非整个diff
* `git reset HEAD` 取消已暂存的内容

#### 远程同步

* `git fecth [remote-name]` 下载远程仓库的所有变动
* `git remote -v` 显示所有的远程仓库
* `git remote show [remote-name]` 显示某个远程仓库的信息
* `git remote add <远程主机名> <url>` 添加远程主机，用于连接本地和远程仓库
* `git remote rm <远程主机名>` 删除远程主机
* `git pull <远程主机名> <远程分支名>` 拉取远程分支并且合并到当前分支
* `git push <远程主机名> <本地分支名>` 推送本地分支到远程master主分支
* `git push -u origin master` 将本地master推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用`git push`了。
