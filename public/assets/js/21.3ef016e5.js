(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{503:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("类图是我们使用 UML 时用得相当多的一种图，如果你有编程经验，那类图就太容易看懂了。类图中的类对象用矩形表示，类对象之间的关系可以用实心箭头、虚线箭头、空心箭头等图形表示。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("traverse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prevorder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("traverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prevorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prevorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("以上方的 Python 代码为例，对应的类图如下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://can.sfhfpc.com/uPic/image-20200720161655432.png",alt:"image-20200720161655432"}})]),t._v(" "),a("p",[t._v("在 UML 中，类可称为类对象。类中的函数需要加括号表明，变量不需要特殊表示，函数和变量用实心直线分隔。如果追求更细致的表达，例如变量的名称和默认值可以写为：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("brandName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NightTeam"')]),t._v("\nName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("当然也可以根据语言的不同做适当的调整，例如 Rust 中表达指定路径的类时可以用 "),a("code",[t._v("ProjectPath::ClassName")]),t._v(" 表示。")]),t._v(" "),a("p",[t._v("还可以为对象增加一些约束，例如限制传入参数 capacity 的上限为 100，下限为 50，具体表示如下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://can.sfhfpc.com/uPic/image-20200720165759848.png",alt:"image-20200720165759848"}})]),t._v(" "),a("p",[t._v("花括号中间的就是类对象的约束说明，方在哪个位置并没有明确规定，你可以放在类的左侧或者右侧，上方或者下方。")]),t._v(" "),a("p",[t._v("有时候你可能想为某个函数或者变量添加注释，这时候可以用一个像文件的图标来表示，将注释内容写在文件上即可，类对象与注释之间用虚线连接即可，具体表示如下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://can.sfhfpc.com/uPic/image-20200720170046207.png",alt:"image-20200720170046207"}})]),t._v(" "),a("h2",{attrs:{id:"类对象之间的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类对象之间的关系"}},[t._v("#")]),t._v(" 类对象之间的关系")]),t._v(" "),a("p",[t._v("在 UML 中，类对象通常有泛化关系、依赖关系和关联关系这 3 种。下面我们一起来看看在 UML 中如何表示类对象的这 3 种关系。")]),t._v(" "),a("h3",{attrs:{id:"类的继承和图的泛化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类的继承和图的泛化"}},[t._v("#")]),t._v(" 类的继承和图的泛化")]),t._v(" "),a("p",[t._v("实际上我们编程过程中所说的类的继承关系在 UML 图中就是泛化关系。泛化关系用空心实线箭头表示，箭头指向的是父类，具体表示如下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://can.sfhfpc.com/uPic/image-20200720162544623.png",alt:"image-20200720162544623"}})]),t._v(" "),a("p",[t._v("要注意的是，在一些编程语言（例如 Python）中，一个类可以有多个父类。就像上图的狮虎兽，它继承了狮子和老虎的基因🧬。")]),t._v(" "),a("h3",{attrs:{id:"类的调用和依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类的调用和依赖"}},[t._v("#")]),t._v(" 类的调用和依赖")]),t._v(" "),a("p",[t._v("在一个类当中调用另一个类，那么它们的关系就是依赖关系，具体表示如下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://can.sfhfpc.com/uPic/image-20200720163103690.png",alt:"image-20200720163103690"}})]),t._v(" "),a("p",[t._v("在名为 Move 的类当中实例化了名为 Run 的类，实例名为 run。这时候 Move 和 Run 就建立了依赖关系，Move 依赖于 Run。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("为了便于读者理解，补充一些说明。Move 代表移动，Run 代表跑。移动的方式除了跑之外还有走、跳、爬、滚等，所以示例中用 Move 依赖于 Run。跑又分为快跑和慢跑，所以 Run 对象里面包含 fast 函数和 slow 函数。")])]),t._v(" "),a("h3",{attrs:{id:"类对象的关联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类对象的关联"}},[t._v("#")]),t._v(" 类对象的关联")]),t._v(" "),a("p",[t._v("在 UML 图中，类对象与类对象之间除了泛化和依赖之外还有关联关系。这里的关联可以是泛化也可以是依赖，也可以两者都不是。它仅仅只表示类对象之间有联系，可以不用指明具体联系，因此是一种灵活的表达方式。")]),t._v(" "),a("p",[t._v("举个例子，在英雄联盟职业联赛当中，职业选手和公司是契约关系，公司可以根据发展规划选择让选手上场比赛或者交易到其他队伍。这种契约关系和泛化、依赖都不相关，在 UML 中可以用直线表示关联，用构造型说明，具体表示如下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://can.sfhfpc.com/uPic/image-20200720164043255.png",alt:"image-20200720164043255"}})]),t._v(" "),a("p",[t._v("如果公司之间产生与职业选手人员交换相关的交易，那就会有人进入到公司中，为公司下属的队伍效力。这样的关系叫做链，这是一个有指向性的关系，选手效力于队伍，所以可以用箭头来表示指向。但 UML 中约定用三角符号表示，具体如下图所示。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://can.sfhfpc.com/uPic/image-20200720164429449.png",alt:"image-20200720164429449"}})]),t._v(" "),a("p",[t._v("其实你用箭头来表示也是可以的。")]),t._v(" "),a("h3",{attrs:{id:"关联上的约束"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联上的约束"}},[t._v("#")]),t._v(" 关联上的约束")]),t._v(" "),a("p",[t._v("有些场景下，两个对象建立关联后需要一个规则来维持关系，这时候可以通过在关联线附近添加一个约束来说明。例如去医院看病时，医生为病患问诊，但问诊服务需要按照病患预约排队次序进行，具体表示如下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://can.sfhfpc.com/uPic/image-20200720164759129.png",alt:"image-20200720164759129"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);