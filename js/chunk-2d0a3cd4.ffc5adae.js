(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3cd4"],{"0471":function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"mt-3"},[t("div",{staticClass:"title"},[a._v("Peringkat berdasarkan")]),t("v-form",{ref:"form",model:{value:a.valid,callback:function(e){a.valid=e},expression:"valid"}},[t("v-row",[t("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"3",sm:"3"}},[t("v-select",{attrs:{items:a.dataKelas,"item-text":"name","item-value":"id","return-object":"",label:"Kelas",required:"",rules:a.requiredRule,outlined:"",dense:""},model:{value:a.kelas,callback:function(e){a.kelas=e},expression:"kelas"}})],1),t("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"3",sm:"3"}},[t("v-select",{attrs:{items:a.detailJurusan,"item-text":"major","item-value":"id","return-object":"",disabled:""===a.kelas,label:"Jurusan",required:"",rules:a.requiredRule,outlined:"",dense:""},model:{value:a.jurusan,callback:function(e){a.jurusan=e},expression:"jurusan"}})],1),t("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"3",sm:"3"}},[t("v-select",{attrs:{items:a.detailRuang,"item-text":"name","item-value":"id","return-object":"",label:"Ruang kelas",disabled:""===a.kelas,required:"",rules:a.requiredRule,outlined:"",dense:""},model:{value:a.ruang,callback:function(e){a.ruang=e},expression:"ruang"}})],1),t("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"3",sm:"3"}},[t("div",{staticClass:"d-flex"},[t("v-spacer"),t("v-btn",{attrs:{disabled:!a.valid,type:"submit",color:"primary",depressed:""},on:{click:function(e){return e.preventDefault(),a.validate(e)}}},[a._v(" Filter ")])],1)])],1)],1),t("v-divider"),t("div",{staticClass:"my-3"},[t("v-btn",{staticClass:"mr-3",attrs:{depressed:"",color:"orange",dark:""}},[t("v-icon",{staticClass:"mr-2"},[a._v("mdi-file-export-outline")]),a._v(" export ke pdf ")],1),t("v-btn",{staticClass:"mr-3",attrs:{depressed:"",color:"orange",dark:""}},[t("v-icon",{staticClass:"mr-2"},[a._v("mdi-file-excel-outline")]),a._v(" export ke exel ")],1)],1),t("v-divider"),t("Data",{attrs:{hasilFilter:a.hasilFilter}})],1)},s=[],l=(t("4de4"),t("b0c0"),t("5530")),i=t("8336"),n=t("132d"),o=t("0fd9"),u=t("b974"),d=t("62ad"),c=t("2fa4"),v=t("4bd4"),m=t("ce7e"),p=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("v-toolbar",{attrs:{elevation:"0"}},[t("v-toolbar-title",[a._v("Peringkat Ujian")]),t("v-spacer"),t("v-text-field",{staticClass:"mt-7",attrs:{label:"Cari siswa",outlined:"","append-icon":"mdi-magnify",dense:""}})],1),t("v-data-table",{attrs:{headers:a.header,search:a.search,items:a.dataJurusan,"items-per-page":10},scopedSlots:a._u([{key:"no-result",fn:function(){return[t("v-alert",{staticClass:"mt-4",attrs:{type:"info"}},[t("div",[a._v("Data tidak ditemukan")])])]},proxy:!0}])})],1)},b=[],f=t("8fea"),g=t("0798"),h=t("71d9"),k=t("2a7f"),x=t("8654"),V={components:{VDataTable:f["a"],VAlert:g["a"],VSpacer:c["a"],VToolbar:h["a"],VToolbarTitle:k["a"],VTextField:x["a"]},data:function(){return{header:[{text:"No",value:"no",sortable:!1},{text:"NISN",value:"no",sortable:!1},{text:"Nama",value:"no",sortable:!1},{text:"Jurusan",value:"major",sortable:!1},{text:"Kelas",value:"group",sortable:!1},{text:"Ruang Kelas",value:"group",sortable:!1},{text:"Total Nilai",value:"group",sortable:!1},{text:"Rata-Rata",value:"group",sortable:!1},{text:"Ranking",value:"group",sortable:!1}],dataJurusan:[],search:"",isLoading:!1,dataKelas:[]}},methods:{},created:function(){}},j=V,C=t("2877"),R=t("6544"),_=t.n(R),J=Object(C["a"])(j,p,b,!1,null,null,null),w=J.exports;_()(J,{VAlert:g["a"],VDataTable:f["a"],VSpacer:c["a"],VTextField:x["a"],VToolbar:h["a"],VToolbarTitle:k["a"]});var y=t("2f62"),D={components:{VBtn:i["a"],VIcon:n["a"],VRow:o["a"],VSelect:u["a"],VCol:d["a"],VSpacer:c["a"],VForm:v["a"],VDivider:m["a"],Data:w},data:function(){return{jurusan:"",kelas:"",ruang:"",detailJurusan:[],detailRuang:[],hasilFilter:{group:"",major:"",room:""},valid:!0,requiredRule:[function(a){return!!a||"Harus diisi"}]}},created:function(){this.$store.dispatch("dataMaster/getDataKelas"),this.$store.dispatch("dataMaster/getDataJurusan"),this.$store.dispatch("dataMaster/getDataRuang")},watch:{kelas:function(a){this.detailJurusan=this.dataJurusan.filter((function(e){return e.group===a.name}))},jurusan:function(a){this.detailRuang=this.dataRuang.filter((function(e){return e.group===a.group&&e.major===a.major}))}},computed:Object(l["a"])({},Object(y["b"])("dataMaster",["dataKelas","dataJurusan","dataRuang"])),methods:{validate:function(){this.$refs.form.validate()&&(this.hasilFilter={group:this.kelas.name,major:this.jurusan.major,room:this.ruang.name})}}},T=D,F=Object(C["a"])(T,r,s,!1,null,null,null);e["default"]=F.exports;_()(F,{VBtn:i["a"],VCol:d["a"],VDivider:m["a"],VForm:v["a"],VIcon:n["a"],VRow:o["a"],VSelect:u["a"],VSpacer:c["a"]})}}]);
//# sourceMappingURL=chunk-2d0a3cd4.ffc5adae.js.map