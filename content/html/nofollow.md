## **一、什么是[nofollow标签]**

> nofollow标签是HTML页面中 `A` 标签的一个属性值。这个标签的意义是告诉搜索引擎不要追踪此网页上的链接或不要追踪此特定链接。它可以被看作是一个指示牌，告诉搜索引擎这个链接不是经过作者信任的，因此不应该被视为一个信任票。当搜索引擎看到nofollow标签时，它可能会减少或完全取消该链接的投票权重。

> nofollow标签一般指Nofollow，是HTML页面中A标签的属性，故又称为nofollow属性。该标签告诉搜索引擎这个链接不是作者推荐的，不要追踪此网页上的链接和传递权重，以减少垃圾链接，分散网站权重。

> nofollow标签最初被设计用来应对垃圾链接（Spam），它的作用主要是两方面：
>
> - 一是不给链接投票，降低此链接的权重；
> - 二是使添加nofollow的部分内容不参与网站排名，这样可以集中网站权重，减少权重的分散。这种方式可以帮助网站管理员更好地控制搜索引擎对其网页的追踪和评估，从而改善搜索结果的质量，并防止垃圾链接的蔓延。

![什么是nofollow标签]

nofollow这个概念最初是由谷歌公司在2005年的时候提出来的，并被百度、yahoo等各大搜索引擎广泛支持，是一个"反垃圾链接"的标签，当时提出这个标签的解释主要是为了应付越来越泛滥的外链群发作弊，意思就是说，只要加入了这个nofollow标签的链接，搜索蜘蛛就不会进行爬行。

## **二、nofollow标签的正确使用方法**

**1、用于meta元标签**

<meta name="robots" content="nofollow" />

这段代码告诉搜索引擎不要抓取网页上的所有链接，和包括内部链接、外部链接。

Content里index、noindex、follow、nofollow标签结合使用：

<meta name="robots" content="index,follow">：可以抓取本页，而且可以顺着本页继续索引别的链接。

<meta name="robots" content="noindex,follow">：不许抓取本页，但是可以顺着本页抓取索引别的链接。

<meta name="robots" content="index,nofollow">：可以抓取本页，但是不许顺着本页抓取索引别的链接。

<meta name="robots" content="noindex,nofollow">：不许抓取本页，也不许顺着本页抓取索引别的链接。

**2、用于a标签**

```html
<a href="https://www.iczp.net/" rel="nofollow">[这里是锚文本]</a>
```

这段代码在超链接中加入nofollow属性，意思是告诉搜索引擎不要追踪这个链接。

## **三、nofollow标签应用场景**

> 通过合理使用nofollow标签，网站管理员可以更好地控制链接的权重分配，提高网站的搜索引擎优化效果，并有效防止垃圾链接的扩散。

nofollow标签在多种场景中具有实际应用，主要包括以下几个方面：

1. **论坛帖子和博客评价**：这些地方通常存在大量的其他网站链接，其中可能包含垃圾链接，影响搜索引擎蜘蛛的爬取。使用nofollow标签可以避免给这些链接传递权重，防止垃圾链接的过度滋生。
2. **广告链接**：给广告链接加上nofollow可以明确告诉搜索引擎，这是一个广告链接，不应该传递链接权重。这样做有助于遵守搜索引擎的指南，确保广告链接不会被误认为是编辑推荐。
3. **网站内部链接**：对于网站内部的一些无用页面，如法律声明、版权声明等，加上nofollow标签可以阻止整个网站的权重传递到这些页面上。这样做可以确保网站的权重更集中地分配到其他更有价值的页面上。
4. **购物车和注册页面**：这些页面通常对搜索引擎不友好，使用nofollow标签可以阻止搜索引擎索引这些页面，从而提高网站的SEO效果。
5. **自定义付费链接**：为了遵循搜索引擎的指南，付费链接通常会被添加nofollow标签。这样做可以表明这不是一个编辑上的推荐链接，搜索引擎不应该传递该链接的权重。



## **四、nofollow标签的作用**

通常情况下，反向链接是会传递权重的，所以一些做[SEO]的为了添加反向链接，就在论坛和博客等大量发布带无关链接的内容。这些垃圾链接的存在给搜索引擎对网页质量的评估造成一定程度的麻烦。因此，在这种情况下，nofollow正是几大搜索引擎商(比如，Google、Yahoo、百度等)为了应对垃圾链接(Spam)引入的一个属性。 其作用具体表现为以下几方面。

**1、Nofollow可以帮助你区分链接**

自然的外链是多种多样的。一些链接是dofollow链接，另外的则是nofollow链接。这个事实是不可避免的，因为有些人不可避免地会通过nofollow链接链接到你。总之，如果一个网站只有dofollow链接，或者是占比非常高，那么就非常的可疑了。

**2、Nofollow链接可以防止百度谷歌惩罚**

如果你的内容页面，由于社会关系，碍于情面必须要链接某位熟人的低质量内容，那么你完全可以利用Nofollow标签，屏蔽这个链接，从而避免链接大量垃圾页面而遭到惩罚。

**3、引导爬虫抓取有效的页面**

链接不仅对SEO有用。它们也可以提高引荐流量。如果一个nofollow链接带来了有效价值的用户访问，说明这个链接对用户是有价值的，对搜索引擎来说就是dofollow的链接机会。

**4、提升锚文本的影响力**

虽然Nofollow标签并不能传递权重，但是来自高权重，知名站点的Nofllow链接，仍然对中小网站有着积极推动的作用，基于庞大的用户群，它有利于企业网站的曝光。

**注意：**网站上添加了nofollow属性标签并不代表搜索引擎不收录那个链接，没有说不要抓取链接指向的URL，也没有说不要索引链接指向的URL，nofollow既没禁止抓取，也没禁止索引，只是不将这个链接计算入反向链接而已。链接加了nofollow，不意味着别的地方就没有正常的指向这个URL的链接，只要别的地方出现了没加nofollow的链接，目标URL还是会被发现、抓取(假设没被robotx文件禁止)、索引(假设没加noindex )。

## **五、nofollow与robots的区别**

很多时候nofollow和robots一并被人提起，因为一般看来都有一个效果——让搜索引擎不要抓取某个页面。这里因为多种搜索引擎的不同处理方式是有不同情况的：

百度：百度爬虫极有可能会爬行nofollow链接，所以试图用nofollow来屏蔽某个页面不被抓取是不妥当的，必须辅以[robots文件]。而robots文件已经屏蔽的页面，是不会获得权重的。

Google：Google爬虫不会爬行nofollow链接，但是只要页面有一个dofollow链接，依然是有可能被抓取的，想要屏蔽页面最妥当的方式还是采用robots文件。

因为不同搜索引擎对待这两个东西的方式不尽相同，所以当需要屏蔽页面的时候，应当把这两个都用上。

## **六、百度与Google对待nofollow标签的态度**

**1、百度对于nofollow标签的态度**

网页级：< meta name="robots" content="nofollow" > 不追踪链接，不传递权重。

链接级：< a rel="nofollow" href="#" >123< /a >跟踪链接并记录锚文本，但不传递权重。

**2、Google对待nofollow标签的态度**

Google对于nofollow：最近的google搜索引擎优化初学者指南中明确指出：如果您把某一链接的"rel"属性设置成"nofollow" , 这意味着您是在向Google传达这样的信息 : 您不希望Google继续跟踪抓取这些特定链接所指向的页面 , 并且也不希望将自己网页的声誉传给这些链接指向的网页。（也就是不跟踪知道的nofollow链接也不传递相应的权重）。

## **七、链接属性的重大变化**

**1、增加了两个新的属性：**

**rel="sponsored":** 这个新属性/标签用于标注广告、赞助商或其它因利益而存在的链接。

**rel="ugc":** 这个新属性/标签用于UGC（用户产生内容），如论坛帖子、博客评论之类的。

**rel="nofollow":** 这个老的属性/标签依然用于没有任何投票、背书意味的链接，也不传递排名权重。

换句话说，新公布的两个标签是为广告和UGC各新创了一个专用标签。

**2、这三个标签将被搜索引擎算法在决定链接是否应该被考虑时视为一个暗示，更容易理解点的词是一个建议，而不是指令。**

以前的nofollow基本上是一个指令，搜索引擎会忽略加了nofollow的链接，在计算权重流动时根本不考虑这个链接。但变更以后，只把这三个标签当作建议，搜索引擎的算法是否考虑这个链接，由搜索引擎自行综合其它因素来做决定。

## **八、nofollow标签常见问答**

**1、链接中有Nofollow属性是否算外链？**

从主流SEO平台对nofollow跟踪来说，有专门nofollow链接的分析，归属为网站外链的一种类型，由此可以看出链接中有Nofollow属性也算一种外链，因为这种链接如果出现位置好是可以吸引用户的。

**2、Nofollow标签去除重复链接有什么效果?**

加入Nofollow标签并不能像我们想象中的那样节约很多时间，因为百度站长指南中就明确的说了，蜘蛛会将网站第一个链接抓取后，重复出现的并不会给予权值，且只做记录作用。所以为了节约时间而使用Nofollow标签去除重复性链接根本就是多此一举。

**总结**

优化猩SEO：如果你正在进行网站的外链建设，尤其是进行友情链接交换，务必查看对方网站是否添加nofollow，如果添加了nofollow属性，将导致该友情链接失去了本来的意义，因为这些链接不会传递网站权重，对网站[SEO优化]没有效果。

参考链接：

Nofollow_百度百科

https://baike.baidu.com/item/Nofollow/2410595

NOFOLLOW是什么意思 - 百度经验

https://jingyan.baidu.com/article/3aed632e6627877010809101.html

nofollow标签_nofollow是什么意思及nofollow作用-CSDN博客

https://blog.csdn.net/weixin_39729840/article/details/111679084

不断完善 nofollow - 确定链接性质的几种新方法 _ Google 搜索中心

https://developers.google.com/search/blog/2019/09/evolving-nofollow-new-ways-to-identify?hl=zh-cn

nofollow常见问题解答 - 卢松松博客

https://lusongsong.com/reed/397.html

修改于2023-05-05
