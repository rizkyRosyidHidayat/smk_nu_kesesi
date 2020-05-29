(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5750"],{9520:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"mt-3"},[e("div",{staticClass:"title"},[a._v("Rekapitulasi Nilai berdasarkan")]),e("v-form",{ref:"form",staticClass:"mb-3",model:{value:a.valid,callback:function(t){a.valid=t},expression:"valid"}},[e("v-row",[e("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[e("v-select",{attrs:{items:a.dataMapel,"item-text":"name","item-value":"id",label:"Mata pelajaran",required:"",rules:a.requiredRule,outlined:"",dense:""},model:{value:a.hasilFilter.subject_id,callback:function(t){a.$set(a.hasilFilter,"subject_id",t)},expression:"hasilFilter.subject_id"}})],1),e("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[e("v-select",{attrs:{items:a.dataKelas,"item-text":"name","item-value":"id",label:"Kelas",required:"",rules:a.requiredRule,outlined:"",dense:""},model:{value:a.hasilFilter.group_id,callback:function(t){a.$set(a.hasilFilter,"group_id",t)},expression:"hasilFilter.group_id"}})],1),e("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[e("v-select",{attrs:{items:a.dataJurusan,"item-text":"name","item-value":"id",label:"Jurusan",required:"",rules:a.requiredRule,outlined:"",dense:""},model:{value:a.hasilFilter.major_id,callback:function(t){a.$set(a.hasilFilter,"major_id",t)},expression:"hasilFilter.major_id"}})],1),e("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[e("v-select",{attrs:{items:a.detailRuang,"item-text":"name","item-value":"id",label:"Ruang kelas",disabled:""===a.hasilFilter.major_id,required:"",rules:a.requiredRule,outlined:"",dense:""},model:{value:a.hasilFilter.room_id,callback:function(t){a.$set(a.hasilFilter,"room_id",t)},expression:"hasilFilter.room_id"}})],1),e("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[e("div",{staticClass:"d-flex"},[e("v-spacer"),e("v-btn",{staticClass:"mr-3",attrs:{loading:a.isLoading,color:"error",depressed:""},on:{click:a.reset}},[a._v(" reset ")]),e("v-btn",{attrs:{disabled:!a.valid,loading:a.isLoading,type:"submit",color:"primary",depressed:""},on:{click:function(t){return t.preventDefault(),a.validate(t)}}},[a._v(" Filter ")])],1)])],1)],1),e("v-divider"),e("div",{staticClass:"my-3 d-flex"},[e("v-btn",{staticClass:"mr-3",attrs:{depressed:"",color:"orange",dark:""}},[e("v-icon",{staticClass:"mr-2"},[a._v("mdi-file-export-outline")]),a._v(" export ke pdf ")],1),e("export-excel",{attrs:{data:a.dataExcel,fields:a.fields,worksheet:"Rekapitulasi nilai",name:"Rekapitulasi_nilai.xls"}},[e("v-btn",{staticClass:"mr-3",attrs:{depressed:"",color:"orange",dark:""}},[e("v-icon",{staticClass:"mr-2"},[a._v("mdi-file-excel-outline")]),a._v(" export ke exel ")],1)],1)],1),e("v-divider"),e("Data",{attrs:{hasilFilter:a.hasilFilter}})],1)},s=[],l=(e("4de4"),e("d81d"),e("5530")),r=e("8336"),d=e("132d"),o=e("0fd9"),n=e("b974"),u=e("62ad"),c=e("2fa4"),m=e("4bd4"),v=e("ce7e"),p=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("v-toolbar",{attrs:{elevation:"0"}},[e("v-toolbar-title",[a._v("Rekapitulasi Nilai Ujian")]),e("v-spacer"),e("v-text-field",{staticClass:"mt-7",attrs:{label:"Cari siswa",outlined:"","append-icon":"mdi-magnify",dense:""}})],1),e("v-data-table",{attrs:{headers:a.header,search:a.search,items:a.dataResult,"items-per-page":10},scopedSlots:a._u([{key:"item.no",fn:function(t){var e=t.item;return[a._v(" "+a._s(a.dataResult.map((function(a){return a.user_nisn})).indexOf(e.user_nisn)+1)+" ")]}},{key:"no-data",fn:function(){return[e("v-alert",{staticClass:"mt-4",attrs:{type:"info"}},[e("div",[a._v("Data tidak ditemukan")])])]},proxy:!0}])})],1)},h=[],b=e("2f62"),f=e("8fea"),_=e("0798"),x=e("71d9"),g=e("2a7f"),R=e("8654"),F={components:{VDataTable:f["a"],VAlert:_["a"],VSpacer:c["a"],VToolbar:x["a"],VToolbarTitle:g["a"],VTextField:R["a"]},data:function(){return{header:[{text:"No",value:"no",sortable:!1},{text:"NISN",value:"user_nisn",sortable:!1},{text:"Nama",value:"user_name",sortable:!1},{text:"Nilai",value:"exam_score",sortable:!1}],search:""}},methods:{},computed:Object(l["a"])({},Object(b["b"])("dataResult",["dataResult","isLoading"]))},V=F,k=e("2877"),j=e("6544"),C=e.n(j),$=Object(k["a"])(V,p,h,!1,null,null,null),D=$.exports;C()($,{VAlert:_["a"],VDataTable:f["a"],VSpacer:c["a"],VTextField:R["a"],VToolbar:x["a"],VToolbarTitle:g["a"]});var y={components:{VBtn:r["a"],VIcon:d["a"],VRow:o["a"],VSelect:n["a"],VCol:u["a"],VSpacer:c["a"],VForm:m["a"],VDivider:v["a"],Data:D},data:function(){return{detailRuang:[],hasilFilter:{group_id:"",major_id:"",room_id:"",subject_id:""},fields:{Nomor:"no",NISN:"user_nisn",Nama:"user_name",Nilai:"exam_score"},valid:!0,requiredRule:[function(a){return!!a||"Harus diisi"}]}},created:function(){this.$store.dispatch("dataMaster/getDataKelas"),this.$store.dispatch("dataMaster/getDataJurusan"),this.$store.dispatch("dataMaster/getDataMapel"),this.$store.dispatch("dataMaster/getDataRuang")},watch:{"hasilFilter.major_id":function(a){var t=this;this.detailRuang=this.dataRuang.filter((function(e){return e.group.id===t.hasilFilter.group_id&&e.major.id===a}))}},computed:Object(l["a"])({},Object(b["b"])("dataMaster",["dataKelas","dataJurusan","dataRuang","dataMapel"]),{},Object(b["b"])("dataResult",["isLoading","dataResult"]),{dataExcel:function(){return this.dataResult.map((function(a,t){return a.no=t+1,a}))}}),methods:{validate:function(){this.$refs.form.validate()&&(this.$store.dispatch("dataResult/getDataResultFilter",this.hasilFilter),this.$store.dispatch("dataResult/updateIsLoading",!0))},reset:function(){this.$store.dispatch("dataResult/getDataResult"),this.$store.dispatch("dataResult/updateIsLoading",!0),this.hasilFilter.group_id="",this.hasilFilter.room_id="",this.hasilFilter.major_id="",this.hasilFilter.subject_id=""}}},w=y,N=Object(k["a"])(w,i,s,!1,null,null,null);t["default"]=N.exports;C()(N,{VBtn:r["a"],VCol:u["a"],VDivider:v["a"],VForm:m["a"],VIcon:d["a"],VRow:o["a"],VSelect:n["a"],VSpacer:c["a"]})}}]);
//# sourceMappingURL=chunk-2d0e5750.81e04dbe.js.map