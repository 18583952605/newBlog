---
title: GitHub
---

### Pages
<Alert type='info'>
  Pages是GitHub提供的一个用来展示静态页面的功能，省下了开发者自己搭建服务器及域名，<br>
  起初它的目的是为了允许用户自定义首页，用来代替默认的源码列表，<br>
  一个简明易懂的网页，可以说明每一步应该怎么做，比看到一大堆源码好得多，<br>
  现在多用于开发者搭建静态页面服务
</Alert>


### Actions
<Alert type='info'>
  Actions是GitHub提供的一个用来触发工作流的功能<br>
  可以在仓库中的代码有新push后触发一些操作<br>
</Alert>

<Tabs
  data="[
    `从 GitHub 上的仓库，在 ‘.github/workflows’ 目录中创建一个名为 ‘github-actions-demo.yml’ 的新文件，<br>
    将以下 YAML 内容复制到 github-actions-demo.yml 文件中:`,
    `滚动到页面底部，然后选择 Create a new branch for this commit and start a pull request（为此提交创建一个新分支并开始拉取请求）<br>
    然后，若要创建拉取请求，请单击 Propose new file（提议新文件）`
  ]"
/>

```yml
name: GitHub Actions Demo
on: [push]
jobs:
  Explore-GitHub-Actions:
    runs-on: ubuntu-latest
    steps:
      - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
      - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
      - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
      - name: Check out repository code
        uses: actions/checkout@v2
      - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
      - run: echo "🖥️ The workflow is now ready to test your code on the runner."
      - name: List files in the repository
        run: |
          ls ${{ github.workspace }}
      - run: echo "🍏 This job's status is ${{ job.status }}."
```
 
