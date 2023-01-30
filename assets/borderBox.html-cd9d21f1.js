import{_ as w,M as o,p as R,q,R as n,t,N as e,V as a,a1 as s}from"./framework-7e1a102e.js";const C={data(){return{info1:"<BorderBox1>BorderBox1</BorderBox1>",info2:"<BorderBox2>BorderBox2</BorderBox2>",info3:"<BorderBox3>BorderBox3</BorderBox3>",info4:"<BorderBox4>BorderBox4</BorderBox4>",info4Reverse:'<BorderBox4 :reverse="true">BorderBox4</BorderBox4>',info5:"<BorderBox5>BorderBox5</BorderBox5>",info5Reverse:'<BorderBox5 :reverse="true">BorderBox5</BorderBox5>',info6:"<BorderBox6>BorderBox6</BorderBox6>",info7:"<BorderBox7>BorderBox7</BorderBox7>",info8:"<BorderBox8>BorderBox8</BorderBox8>",info8Reverse:'<BorderBox8 :reverse="true">BorderBox8</BorderBox8>',info9:"<BorderBox9>BorderBox9</BorderBox9>",info10:"<BorderBox10>BorderBox10</BorderBox10>",info11:'<BorderBox11 title="BorderBox11">BorderBox11</BorderBox11>',info12:"<BorderBox12>BorderBox12</BorderBox12>",info13:"<BorderBox13>BorderBox13</BorderBox13>"}}},N=n("h1",{id:"边框",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#边框","aria-hidden":"true"},"#"),t(" 边框")],-1),P=n("strong",null,"SVG",-1),S=s('<div class="custom-container tip"><p class="custom-container-title">边框内布局</p><p>边框组件默认宽高均为 100%，边框内部的节点将被 slot 插槽分发至边框组件下 class 为<code>dv-border-box-content</code>的容器内，如有布局需要，请针对该容器布局，以免产生样式冲突，导致边框显示异常。（如果配置了 classNamePrefix，class 的 <code>dv-</code>前缀将被修改，以实际设置为准）</p></div><div class="custom-container warning"><p class="custom-container-title">注意事项</p><p>建议把边框内的节点封装成<strong>组件</strong>，<strong>以组件的形式置入边框</strong>。这是因为 slot 的渲染机制较为特殊，如果你要在组件 mounted 后对边框内置入的节点进行页面渲染状态敏感的操作（获取 DOM 宽高，实例化 echarts 图表等），可能会发生非预期的结果。比如获取的 DOM 宽高为 0，封装成组件后可避免这种情况。</p></div><div class="custom-container tip"><p class="custom-container-title">重置宽高</p><p>如果边框组件的父容器宽高发生了变化，而边框组件没有侦知这一变化，边框就无法自适应父容器宽高。针对这种情况，你可以给边框绑定 key 值，在父容器宽高发生变化且完成渲染后更改 key 值，强制销毁边框组件实例并重新渲染，重新获取宽高。但这会造成边框内的组件同样被销毁重新渲染，带来额外的性能消耗，并导致组件状态丢失，此时我们可以调用组件对外暴露的<code>refreshLayoutSize</code>方法去刷新边框组件的宽高以避免销毁组件实例重新渲染带来的非预期副作用。</p></div>',3),V=n("div",{class:"language-tsx","data-ext":"tsx"},[n("pre",{class:"language-tsx"},[n("code",null,[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" BorderBox1 "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@dataview/datav-vue3'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token keyword"},"type"),t(),n("span",{class:"token punctuation"},"{"),t(" ExposeWithRefreshLayoutSize "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@dataview/datav-vue3'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token keyword"},"type"),t(),n("span",{class:"token punctuation"},"{"),t(" ComponentPublicInstance "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"const"),t(" App "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token comment"},"/*#__PURE__*/"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" borderBoxRef "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"ref"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),t("ComponentPublicInstance"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(" ExposeWithRefreshLayoutSize"),n("span",{class:"token operator"},">>")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token comment"},"// 按需使用 刷新组件宽高状态"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"refresh"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      borderBoxRef`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"refreshLayoutSize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"BorderBox1")]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("borderBoxRef"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"}," Welcome "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"BorderBox1")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])])],-1),W=s(`<h2 id="自定义颜色" tabindex="-1"><a class="header-anchor" href="#自定义颜色" aria-hidden="true">#</a> 自定义颜色</h2><p>所有边框均支持自定义颜色及背景色，配置项及示例如下。</p><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox1</span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;red&#39;, &#39;green&#39;]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">backgroundColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>BorderBox1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox1</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,3),z=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"属性"),n("th",{style:{"text-align":"center"}},"说明"),n("th",{style:{"text-align":"center"}},"类型"),n("th",{style:{"text-align":"center"}},"可选值"),n("th",{style:{"text-align":"center"}},"默认值")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"center"}},"color"),n("td",{style:{"text-align":"center"}},"自定义颜色"),n("td",{style:{"text-align":"center"}},[n("code",null,"string[]")]),n("td",{style:{"text-align":"center"}},[n("code",null,"-")]),n("td",{style:{"text-align":"center"}},[n("code",null,"-")])]),n("tr",null,[n("td",{style:{"text-align":"center"}},"backgroundColor"),n("td",{style:{"text-align":"center"}},"背景色"),n("td",{style:{"text-align":"center"}},[n("code",null,"string")]),n("td",{style:{"text-align":"center"}},[n("code",null,"-")]),n("td",{style:{"text-align":"center"}},[n("code",null,"-")])])])],-1),L=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,[n("code",null,"color"),t("属性支持配置两个颜色，一主一副。")]),n("p",null,"颜色类型可以为颜色关键字、十六进制色、RGB 及 RGBA。")],-1),E=n("h2",{id:"borderbox1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#borderbox1","aria-hidden":"true"},"#"),t(" BorderBox1")],-1),F={class:"border-box-container"},T=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox1</span><span class="token punctuation">&gt;</span></span>BorderBox1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox1</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),G=n("h2",{id:"borderbox2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#borderbox2","aria-hidden":"true"},"#"),t(" BorderBox2")],-1),I={class:"border-box-container"},M=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox2</span><span class="token punctuation">&gt;</span></span>BorderBox2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox2</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),A=n("h2",{id:"borderbox3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#borderbox3","aria-hidden":"true"},"#"),t(" BorderBox3")],-1),D={class:"border-box-container"},O=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox3</span><span class="token punctuation">&gt;</span></span>BorderBox3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox3</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),j=n("h2",{id:"borderbox4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#borderbox4","aria-hidden":"true"},"#"),t(" BorderBox4")],-1),U=n("h3",{id:"normal",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#normal","aria-hidden":"true"},"#"),t(" Normal")],-1),H={class:"border-box-container"},J=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox4</span><span class="token punctuation">&gt;</span></span>BorderBox4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox4</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),K=n("h3",{id:"reverse",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reverse","aria-hidden":"true"},"#"),t(" Reverse")],-1),Q={class:"border-box-container"},X=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox4</span> <span class="token attr-name">:reverse</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>BorderBox4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox4</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),Y=n("h3",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),t(" 配置")],-1),Z=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"属性"),n("th",{style:{"text-align":"center"}},"说明"),n("th",{style:{"text-align":"center"}},"类型"),n("th",{style:{"text-align":"center"}},"可选值"),n("th",{style:{"text-align":"center"}},"默认值")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"center"}},"reverse"),n("td",{style:{"text-align":"center"}},"反转渲染"),n("td",{style:{"text-align":"center"}},[n("code",null,"boolean")]),n("td",{style:{"text-align":"center"}},[n("code",null,"-")]),n("td",{style:{"text-align":"center"}},[n("code",null,"false")])])])],-1),$=n("h2",{id:"borderbox5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#borderbox5","aria-hidden":"true"},"#"),t(" BorderBox5")],-1),nn=n("h3",{id:"normal-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#normal-1","aria-hidden":"true"},"#"),t(" Normal")],-1),tn={class:"border-box-container"},en=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox5</span><span class="token punctuation">&gt;</span></span>BorderBox5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox5</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),an=n("h3",{id:"reverse-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reverse-1","aria-hidden":"true"},"#"),t(" Reverse")],-1),sn={class:"border-box-container"},on=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox5</span> <span class="token attr-name">:reverse</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>BorderBox5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox5</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),rn=n("h3",{id:"配置-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置-1","aria-hidden":"true"},"#"),t(" 配置")],-1),ln=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"属性"),n("th",{style:{"text-align":"center"}},"说明"),n("th",{style:{"text-align":"center"}},"类型"),n("th",{style:{"text-align":"center"}},"可选值"),n("th",{style:{"text-align":"center"}},"默认值")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"center"}},"reverse"),n("td",{style:{"text-align":"center"}},"反转渲染"),n("td",{style:{"text-align":"center"}},[n("code",null,"boolean")]),n("td",{style:{"text-align":"center"}},[n("code",null,"-")]),n("td",{style:{"text-align":"center"}},[n("code",null,"false")])])])],-1),cn=n("h2",{id:"borderbox6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#borderbox6","aria-hidden":"true"},"#"),t(" BorderBox6")],-1),pn={class:"border-box-container"},dn=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox6</span><span class="token punctuation">&gt;</span></span>BorderBox6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox6</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),un=n("h2",{id:"borderbox7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#borderbox7","aria-hidden":"true"},"#"),t(" BorderBox7")],-1),Bn={class:"border-box-container"},xn=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox7</span><span class="token punctuation">&gt;</span></span>BorderBox7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox7</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),kn=n("h2",{id:"borderbox8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#borderbox8","aria-hidden":"true"},"#"),t(" BorderBox8")],-1),gn=n("h3",{id:"normal-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#normal-2","aria-hidden":"true"},"#"),t(" Normal")],-1),hn={class:"border-box-container"},_n=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox8</span><span class="token punctuation">&gt;</span></span>BorderBox8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox8</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),vn=n("h3",{id:"reverse-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reverse-2","aria-hidden":"true"},"#"),t(" Reverse")],-1),fn={class:"border-box-container"},bn=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox8</span> <span class="token attr-name">:reverse</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>BorderBox8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox8</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),yn=n("h3",{id:"配置-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置-2","aria-hidden":"true"},"#"),t(" 配置")],-1),mn=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"属性"),n("th",{style:{"text-align":"center"}},"说明"),n("th",{style:{"text-align":"center"}},"类型"),n("th",{style:{"text-align":"center"}},"可选值"),n("th",{style:{"text-align":"center"}},"默认值")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"center"}},"duration"),n("td",{style:{"text-align":"center"}},"单次动画时长(秒)"),n("td",{style:{"text-align":"center"}},[n("code",null,"number")]),n("td",{style:{"text-align":"center"}},[n("code",null,"-")]),n("td",{style:{"text-align":"center"}},[n("code",null,"3")])]),n("tr",null,[n("td",{style:{"text-align":"center"}},"reverse"),n("td",{style:{"text-align":"center"}},"反转渲染"),n("td",{style:{"text-align":"center"}},[n("code",null,"boolean")]),n("td",{style:{"text-align":"center"}},[n("code",null,"-")]),n("td",{style:{"text-align":"center"}},[n("code",null,"false")])])])],-1),wn=n("h2",{id:"borderbox9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#borderbox9","aria-hidden":"true"},"#"),t(" BorderBox9")],-1),Rn={class:"border-box-container"},qn=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox9</span><span class="token punctuation">&gt;</span></span>BorderBox9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox9</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),Cn=n("h2",{id:"borderbox10",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#borderbox10","aria-hidden":"true"},"#"),t(" BorderBox10")],-1),Nn={class:"border-box-container"},Pn=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox10</span><span class="token punctuation">&gt;</span></span>BorderBox10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox10</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),Sn=n("h2",{id:"borderbox11",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#borderbox11","aria-hidden":"true"},"#"),t(" BorderBox11")],-1),Vn={class:"border-box-container"},Wn=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox11</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BorderBox11<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>BorderBox11<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox11</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),zn=n("h3",{id:"配置-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置-3","aria-hidden":"true"},"#"),t(" 配置")],-1),Ln=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"属性"),n("th",{style:{"text-align":"center"}},"说明"),n("th",{style:{"text-align":"center"}},"类型"),n("th",{style:{"text-align":"center"}},"可选值"),n("th",{style:{"text-align":"center"}},"默认值")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"center"}},"title"),n("td",{style:{"text-align":"center"}},"边框标题"),n("td",{style:{"text-align":"center"}},[n("code",null,"string")]),n("td",{style:{"text-align":"center"}},[n("code",null,"-")]),n("td",{style:{"text-align":"center"}},[n("code",null,"''")])]),n("tr",null,[n("td",{style:{"text-align":"center"}},"titleWidth"),n("td",{style:{"text-align":"center"}},"标题宽度"),n("td",{style:{"text-align":"center"}},[n("code",null,"number")]),n("td",{style:{"text-align":"center"}},[n("code",null,"-")]),n("td",{style:{"text-align":"center"}},[n("code",null,"250")])])])],-1),En=n("h2",{id:"borderbox12",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#borderbox12","aria-hidden":"true"},"#"),t(" BorderBox12")],-1),Fn={class:"border-box-container"},Tn=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox12</span><span class="token punctuation">&gt;</span></span>BorderBox12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox12</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),Gn=n("h2",{id:"borderbox13",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#borderbox13","aria-hidden":"true"},"#"),t(" BorderBox13")],-1),In={class:"border-box-container"},Mn=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox13</span><span class="token punctuation">&gt;</span></span>BorderBox13<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox13</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1);function An(Dn,On,jn,Un,r,Hn){const i=o("ReactPageBtn"),B=o("FoldBox"),c=o("FullWidthTable"),x=o("BorderBox1"),l=o("CopyBtn"),k=o("BorderBox2"),g=o("BorderBox3"),p=o("BorderBox4"),d=o("BorderBox5"),h=o("BorderBox6"),_=o("BorderBox7"),u=o("BorderBox8"),v=o("BorderBox9"),f=o("BorderBox10"),b=o("BorderBox11"),y=o("BorderBox12"),m=o("BorderBox13");return R(),q("div",null,[N,n("p",null,[t("边框均由"),P,t("元素绘制，体积轻量不失真，它们的使用极为方便。"),e(i)]),S,e(B,{title:"查看 refreshLayoutSize 使用示例"},{default:a(()=>[V]),_:1}),W,e(c,null,{default:a(()=>[z]),_:1}),L,E,n("div",F,[e(x,null,{default:a(()=>[t("BorderBox1")]),_:1})]),T,e(l,{info:r.info1},null,8,["info"]),G,n("div",I,[e(k,null,{default:a(()=>[t("BorderBox2")]),_:1})]),M,e(l,{info:r.info2},null,8,["info"]),A,n("div",D,[e(g,null,{default:a(()=>[t("BorderBox3")]),_:1})]),O,e(l,{info:r.info3},null,8,["info"]),j,U,n("div",H,[e(p,null,{default:a(()=>[t("BorderBox4")]),_:1})]),J,e(l,{info:r.info4},null,8,["info"]),K,n("div",Q,[e(p,{reverse:!0},{default:a(()=>[t("BorderBox4")]),_:1})]),X,e(l,{info:r.info4Reverse},null,8,["info"]),Y,e(c,null,{default:a(()=>[Z]),_:1}),$,nn,n("div",tn,[e(d,null,{default:a(()=>[t("BorderBox5")]),_:1})]),en,e(l,{info:r.info5},null,8,["info"]),an,n("div",sn,[e(d,{reverse:!0},{default:a(()=>[t("BorderBox5")]),_:1})]),on,e(l,{info:r.info5Reverse},null,8,["info"]),rn,e(c,null,{default:a(()=>[ln]),_:1}),cn,n("div",pn,[e(h,null,{default:a(()=>[t("BorderBox6")]),_:1})]),dn,e(l,{info:r.info6},null,8,["info"]),un,n("div",Bn,[e(_,null,{default:a(()=>[t("BorderBox7")]),_:1})]),xn,e(l,{info:r.info7},null,8,["info"]),kn,gn,n("div",hn,[e(u,null,{default:a(()=>[t("BorderBox8")]),_:1})]),_n,e(l,{info:r.info8},null,8,["info"]),vn,n("div",fn,[e(u,{reverse:!0},{default:a(()=>[t("BorderBox8")]),_:1})]),bn,e(l,{info:r.info8Reverse},null,8,["info"]),yn,e(c,null,{default:a(()=>[mn]),_:1}),wn,n("div",Rn,[e(v,null,{default:a(()=>[t("BorderBox9")]),_:1})]),qn,e(l,{info:r.info9},null,8,["info"]),Cn,n("div",Nn,[e(f,null,{default:a(()=>[t("BorderBox10")]),_:1})]),Pn,e(l,{info:r.info10},null,8,["info"]),Sn,n("div",Vn,[e(b,{title:"BorderBox11"},{default:a(()=>[t("BorderBox11")]),_:1})]),Wn,e(l,{info:r.info11},null,8,["info"]),zn,e(c,null,{default:a(()=>[Ln]),_:1}),En,n("div",Fn,[e(y,null,{default:a(()=>[t("BorderBox12")]),_:1})]),Tn,e(l,{info:r.info12},null,8,["info"]),Gn,n("div",In,[e(m,null,{default:a(()=>[t("BorderBox13")]),_:1})]),Mn,e(l,{info:r.info13},null,8,["info"])])}const Kn=w(C,[["render",An],["__file","borderBox.html.vue"]]);export{Kn as default};