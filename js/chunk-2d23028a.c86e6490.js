(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d23028a"],{eaa9:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-card",{staticClass:"border-card",attrs:{outlined:""}},[e("div",{staticClass:"pa-3 se-primary white--text"},[e("v-icon",{attrs:{color:"white"}},[a._v("mdi-face")]),e("span",{staticClass:"ml-3 text-icon"},[a._v("Daftar Soal")])],1),e("v-card-text",[e("v-form",{ref:"form",model:{value:a.valid,callback:function(t){a.valid=t},expression:"valid"}},[e("v-row",[e("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4",sm:"12"}},[e("v-select",{attrs:{items:a.dataJurusan,"item-text":"name","item-value":"name",label:"Jurusan",outlined:"",dense:""},model:{value:a.hasilFilter.major,callback:function(t){a.$set(a.hasilFilter,"major",t)},expression:"hasilFilter.major"}})],1),e("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4",sm:"12"}},[e("v-select",{attrs:{items:a.dataKelas,"item-text":"name","item-value":"name",label:"Kelas",outlined:"",dense:""},model:{value:a.hasilFilter.group,callback:function(t){a.$set(a.hasilFilter,"group",t)},expression:"hasilFilter.group"}})],1),e("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4",sm:"12"}},[e("div",{staticClass:"d-flex"},[e("v-spacer"),e("v-btn",{staticClass:"mr-3",attrs:{color:"red",dark:"",depressed:""},on:{click:a.reset}},[a._v(" reset ")])],1)])],1)],1),e("DataSoal",{attrs:{hasilFilter:a.hasilFilter}})],1)],1)},s=[],l=e("5530"),i=e("b0af"),n=e("99d9"),o=e("132d"),c=e("8336"),d=e("0fd9"),u=e("b974"),m=e("62ad"),p=e("2fa4"),v=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[a.isLoading?e("Loader",{attrs:{type:"table"}}):e("v-data-table",{attrs:{headers:a.header,search:a.search,items:a.result,"items-per-page":10},scopedSlots:a._u([{key:"top",fn:function(){return[e("div",[e("div",{staticClass:"d-flex"},[e("v-spacer")],1),e("v-text-field",{attrs:{"prepend-icon":"mdi-magnify",label:"Cari Mata Pelajaran","single-line":"",autocomplete:"off","hide-details":""},model:{value:a.search,callback:function(t){a.search=t},expression:"search"}})],1)]},proxy:!0},{key:"no-data",fn:function(){return[e("v-alert",{staticClass:"mt-4",attrs:{type:"info"}},[e("div",[a._v("Data tidak ditemukan")])])]},proxy:!0},{key:"item.no",fn:function(t){var e=t.item;return[a._v(" "+a._s(a.result.map((function(a){return a.id})).indexOf(e.id)+1)+" ")]}},{key:"item.action",fn:function(t){var r=t.item;return[e("div",{staticClass:"d-flex"},[e("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(t){return a.$router.push({name:"review",params:{id:r.id,name:r.name}})}}},[e("v-icon",{attrs:{small:""}},[a._v("mdi-eye")])],1),e("v-btn",{attrs:{icon:"",color:"success"},on:{click:function(t){return a.$router.push({name:"soal-mapel",params:{id:r.id,name:r.group.name+"_"+r.major.name+"_"+r.name}})}}},[e("v-icon",{attrs:{small:""}},[a._v("mdi-view-list")])],1)],1)]}}])})],1)},f=[],h=(e("4de4"),e("caad"),e("b0c0"),e("2532"),e("8fea")),b=e("0798"),x=e("555f"),V=e("2f62"),j={props:["hasilFilter"],components:{VDataTable:h["a"],VAlert:b["a"],VSpacer:p["a"],VBtn:c["a"],VIcon:o["a"],Loader:x["a"]},data:function(){return{header:[{text:"No",value:"no",sortable:!1},{text:"Kelas",value:"group.name",sortable:!1},{text:"Jurusan",value:"major.name",sortable:!1},{text:"Mata Pelajaran",value:"name",sortable:!1},{text:"KKM",value:"score",sortable:!1},{text:"Jumlah Soal",value:"jumlah_soal",sortable:!1},{text:"Action",value:"action",sortable:!1}],search:""}},created:function(){this.$store.dispatch("dataMaster/getDataMapel"),this.$store.dispatch("dataMaster/updateIsLoading",!0)},computed:Object(l["a"])({},Object(V["b"])("dataMaster",["dataMapel","isLoading"]),{result:function(){var a=this;return this.dataMapel.filter((function(t){return t.major.name.includes(a.hasilFilter.major)})).filter((function(t){return t.group.name.includes(a.hasilFilter.group)}))}})},g=j,C=e("2877"),k=e("6544"),F=e.n(k),_=e("8654"),y=Object(C["a"])(g,v,f,!1,null,null,null),w=y.exports;F()(y,{VAlert:b["a"],VBtn:c["a"],VDataTable:h["a"],VIcon:o["a"],VSpacer:p["a"],VTextField:_["a"]});var M={components:{VCard:i["a"],VCardText:n["b"],VIcon:o["a"],VBtn:c["a"],VRow:d["a"],VSelect:u["a"],VCol:m["a"],VSpacer:p["a"],DataSoal:w},data:function(){return{valid:!0,requiredRule:[function(a){return!!a||"Harus diisi"}],hasilFilter:{major:"",group:""}}},created:function(){this.$store.dispatch("dataMaster/getDataJurusan"),this.$store.dispatch("dataMaster/getDataKelas")},computed:Object(l["a"])({},Object(V["b"])("dataMaster",["dataJurusan","dataKelas"])),methods:{reset:function(){this.$refs.form.validate()&&(this.jurusan="",this.hasilFilter.group="",this.hasilFilter.major="")}}},S=M,$=e("4bd4"),D=Object(C["a"])(S,r,s,!1,null,null,null);t["default"]=D.exports;F()(D,{VBtn:c["a"],VCard:i["a"],VCardText:n["b"],VCol:m["a"],VForm:$["a"],VIcon:o["a"],VRow:d["a"],VSelect:u["a"],VSpacer:p["a"]})}}]);
//# sourceMappingURL=chunk-2d23028a.c86e6490.js.map