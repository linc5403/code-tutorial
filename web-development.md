
# Table of Contents

1.  [URL](#org0feaf08)
    1.  [localhost是什么？](#org770f4ab)
    2.  [作业：](#org45a8a1d)
2.  [client - server的交互](#org4bbf0d4)
    1.  [客户端发起请求](#org1660789)
    2.  [服务器进行应答](#orgc326854)


<a id="org0feaf08"></a>

# URL

统一资源定位符, 顾名思义，用来表示一个资源的位置

示例： <https://www.baidu.com/>

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">定义</th>
<th scope="col" class="org-left">内容</th>
<th scope="col" class="org-left">含义</th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">protocol</td>
<td class="org-left">https</td>
<td class="org-left">使用https协议进行通信</td>
</tr>


<tr>
<td class="org-left">host name/domain name</td>
<td class="org-left">www.baidu.com</td>
<td class="org-left">主机域名或是ip地址，此处表示server所在的主机域名是www.baidu.com</td>
</tr>


<tr>
<td class="org-left">path</td>
<td class="org-left">/</td>
<td class="org-left">路径字段，代表访问server所表示的'/'资源</td>
</tr>


<tr>
<td class="org-left">port</td>
<td class="org-left">没有显示表示，因为是https协议，所以是443</td>
<td class="org-left">表示该web Server所监听的端口号</td>
</tr>
</tbody>
</table>

常用的协议缺省端口号：

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">协议名称</th>
<th scope="col" class="org-left">作用</th>
<th scope="col" class="org-left">端口号</th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">http</td>
<td class="org-left">超文本传输协议</td>
<td class="org-left">tcp 80</td>
</tr>


<tr>
<td class="org-left">https</td>
<td class="org-left">超文本传输安全协议</td>
<td class="org-left">tcp 443</td>
</tr>


<tr>
<td class="org-left">ssh</td>
<td class="org-left">安全shell</td>
<td class="org-left">tcp 22</td>
</tr>


<tr>
<td class="org-left">DNS</td>
<td class="org-left">域名服务</td>
<td class="org-left">udp 53</td>
</tr>
</tbody>
</table>


<a id="org770f4ab"></a>

## localhost是什么？

打开你电脑的 `/etc/hosts` 文件，可以看到里面是ip地址和字符串的映射：

    ➜  code-tutorial git:(master) ✗ more /etc/hosts
    ##
    # Host Database
    #
    # localhost is used to configure the loopback interface
    # when the system is booting.  Do not change this entry.
    ##
    127.0.0.1       localhost
    255.255.255.255 broadcasthost
    ::1             localhost
    # Added by Docker Desktop
    # To allow the same kube context to work on the host and the container:
    127.0.0.1 kubernetes.docker.internal
    # End of section

而 `localhost` 字符串对应的ip地址是 `127.0.0.1` ， 在所有的电脑上，这个地址（ `127.0.0.1` ）表示本机，也就是这台电脑。


<a id="org45a8a1d"></a>

## 作业：

列出下面url的各组成部分和代表的含义

<http://localhost:3000/players>


<a id="org4bbf0d4"></a>

# client - server的交互


<a id="org1660789"></a>

## 客户端发起请求

客户端通过浏览器或其他的软件（app）向服务器发起请求， 该请求本质上就是某个URL。

例如我们访问 `https://www.baidu.com/` 时，其实就是在获取这个URL的资源。

客户端会解析该URL的各个组成部分，找到 `protocal` ， `hostname` ， `port` ， `path` （请参看第一部分）

如果hostname不是ip地址，那么会在 `/etc/hosts` 文件中查找该字符串对应的ip地址， 如果找不到，那么使用本机的DNS Client向 DNS Server发起查询请求。

获取到hostname对应的ip地址后，根据hostname和port就可以唯一的确定Server所在的主机和端口，也就是可以和server建立TCP链接了。

建立了TCP连接后，再根据protocol将这个URL封装在请求部分，发送给Server


<a id="orgc326854"></a>

## 服务器进行应答

我们的Web Server就是一个应用程序，它会监听某个TCP的端口号，当这个端口有数据进来的时候，操作系统会将数据转发给Server这个应用程序进行处理。

Server拿到请求后，最重要的事情是获取到这个请求URL的PATH部分，因为PATH代表了client想要访问的资源。

解析出PATH之后，就需要使用程序员编写的函数来返回应答给client

