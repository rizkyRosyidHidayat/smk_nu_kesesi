(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221d87"],{cba3:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-card",{staticClass:"border-card",attrs:{outlined:""}},[e("div",{staticClass:"pa-3 se-primary white--text"},[e("v-icon",{attrs:{color:"white"}},[a._v("mdi-face")]),e("span",{staticClass:"ml-3 text-icon"},[a._v("Master Data Ruang")])],1),e("v-card-text",[e("DataRuang")],1)],1)},r=[],n=e("b0af"),s=e("99d9"),l=e("132d"),d=e("8336"),o=e("0fd9"),u=e("b974"),c=e("62ad"),m=e("2fa4"),p=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[a.isLoading?e("Loader",{attrs:{type:"table"}}):e("v-data-table",{attrs:{headers:a.header,search:a.search,items:a.dataRuang,"items-per-page":10},scopedSlots:a._u([{key:"top",fn:function(){return[e("div",[e("div",{staticClass:"d-flex"},[e("v-spacer")],1),e("v-text-field",{attrs:{"prepend-icon":"mdi-magnify",label:"Cari Ruang","single-line":"",autocomplete:"off","hide-details":""},model:{value:a.search,callback:function(t){a.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.name",fn:function(t){var e=t.item;return[a._v(" "+a._s(e.group.name)+" "+a._s(a.namaJurusan(e.major.name))+" "+a._s(e.name)+" ")]}},{key:"no-result",fn:function(){return[e("v-alert",{staticClass:"mt-4",attrs:{type:"info"}},[e("div",[a._v("Data tidak ditemukan")])])]},proxy:!0},{key:"item.action",fn:function(a){var t=a.item;return[e("div",{staticClass:"d-flex"},[e("EditRuang",{attrs:{detail:t}})],1)]}}])})],1)},v=[],f=(e("4de4"),e("a15b"),e("d81d"),e("ac1f"),e("1276"),e("5530")),g=e("8fea"),b=e("0798"),h=e("2f62"),V=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"text-center"},[e("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:a._u([{key:"activator",fn:function(t){var i=t.on;return[e("v-btn",a._g({attrs:{icon:"",color:"primary"}},i),[e("v-icon",{attrs:{small:""}},[a._v("mdi-pencil")])],1)]}}]),model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-card",[e("div",{staticClass:"pa-3 se-primary white--text text-center"},[e("span",{staticClass:"title"},[a._v("Edit Ruang")])]),e("v-card-text",{staticClass:"pa-6 pb-0"},[e("v-form",{ref:"form",model:{value:a.valid,callback:function(t){a.valid=t},expression:"valid"}},[e("v-select",{attrs:{items:a.detailKelas,"item-text":"name","item-value":"id",label:"Kelas",outlined:"",dense:"",rules:a.requiredRule},model:{value:a.detail.group.id,callback:function(t){a.$set(a.detail.group,"id",t)},expression:"detail.group.id"}}),e("v-select",{attrs:{items:a.detailJurusan,"item-text":"major.name","item-value":"major.id",label:"Jurusan",disabled:""===a.detail.group.id,outlined:"",dense:"",rules:a.requiredRule},model:{value:a.detail.major.id,callback:function(t){a.$set(a.detail.major,"id",t)},expression:"detail.major.id"}}),e("v-text-field",{attrs:{label:"Ruang Kelas",outlined:"",dense:"",rules:a.requiredRule,autocomplete:"off"},model:{value:a.detail.name,callback:function(t){a.$set(a.detail,"name",t)},expression:"detail.name"}})],1)],1),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){a.dialog=!1}}},[a._v(" kembali ")]),e("v-btn",{attrs:{disabled:!a.valid,color:"primary",type:"submit",depressed:""},on:{click:function(t){return t.preventDefault(),a.validate(t)}}},[a._v(" simpan ")])],1)],1)],1)],1)},x=[],R=(e("b0c0"),e("169a")),_=e("ce7e"),C=e("4bd4"),k=e("8654"),j={props:["detail"],components:{VDialog:R["a"],VCard:n["a"],VCardText:s["b"],VCardActions:s["a"],VBtn:d["a"],VDivider:_["a"],VForm:C["a"],VTextField:k["a"],VSelect:u["a"],VSpacer:m["a"],VIcon:l["a"]},data:function(){return{dialog:!1,valid:!0,detailRuang:{major_id:"",group_id:"",name:""},requiredRule:[function(a){return!!a||"Data harus diisi"}]}},computed:Object(f["a"])({},Object(h["b"])("dataMaster",["dataRuang","dataKelas","dataJurusan"]),{detailKelas:{set:function(a){var t=this;this.dataKelas.filter((function(a){return a.id===t.detail.group.id}))},get:function(){return this.dataKelas}},detailJurusan:{set:function(a){var t=this;this.dataJurusan.filter((function(a){return a.id===t.detail.major.id}))},get:function(){var a=this;return this.dataRuang.filter((function(t){return t.group.id===a.detail.group.id}))}}}),methods:{validate:function(){this.$refs.form.validate()&&(this.detailRuang.name=this.detail.name,this.detailRuang.group_id=this.detailRuang.group_id.id,console.log(this.detailRuang))}}},y=j,D=e("2877"),w=e("6544"),J=e.n(w),$=Object(D["a"])(y,V,x,!1,null,null,null),K=$.exports;J()($,{VBtn:d["a"],VCard:n["a"],VCardActions:s["a"],VCardText:s["b"],VDialog:R["a"],VDivider:_["a"],VForm:C["a"],VIcon:l["a"],VSelect:u["a"],VSpacer:m["a"],VTextField:k["a"]});var S=e("555f"),T={components:{VDataTable:g["a"],VAlert:b["a"],VSpacer:m["a"],EditRuang:K,Loader:S["a"]},data:function(){return{header:[{text:"Jurusan",value:"major.name",sortable:!1},{text:"Kelas",value:"group.name",sortable:!1},{text:"Ruang Kelas",value:"name",sortable:!1},{text:"Action",value:"action",sortable:!1}],search:""}},methods:{namaJurusan:function(a){var t=a.split(" ");if(1===t.length)return t[0];var e=t.filter((function(a){return"dan"!==a.toLowerCase()})).map((function(a){return a[0]}));return e.join("")}},created:function(){this.$store.dispatch("dataMaster/getDataKelas"),this.$store.dispatch("dataMaster/getDataRuang"),this.$store.dispatch("dataMaster/getDataJurusan"),this.$store.dispatch("dataMaster/updateIsLoading",!0)},computed:Object(f["a"])({},Object(h["b"])("dataMaster",["isLoading","dataRuang"]))},M=T,O=Object(D["a"])(M,p,v,!1,null,null,null),E=O.exports;J()(O,{VAlert:b["a"],VDataTable:g["a"],VSpacer:m["a"],VTextField:k["a"]});var L={components:{VCard:n["a"],VCardText:s["b"],VIcon:l["a"],VBtn:d["a"],VRow:o["a"],VSelect:u["a"],VCol:c["a"],VSpacer:m["a"],DataRuang:E},data:function(){return{ruang:"",data:["foo","bar","zee"]}}},A=L,F=Object(D["a"])(A,i,r,!1,null,null,null);t["default"]=F.exports;J()(F,{VCard:n["a"],VCardText:s["b"],VIcon:l["a"]})}}]);
//# sourceMappingURL=chunk-2d221d87.7c5ef1cf.js.map