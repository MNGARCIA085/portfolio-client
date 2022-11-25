"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[48],{9048:(Y,h,s)=>{s.r(h),s.d(h,{CoursesModule:()=>E});var c=s(6895),l=s(8869),n=s(4006),t=s(4650),Z=s(2340),v=s(529);let d=(()=>{class o{constructor(e){this.http=e,this._baseUrl=Z.N.baseUrl}getCourses(e){let r="";return r=e?`${this._baseUrl}/api/courses/?title=${e}`:`${this._baseUrl}/api/courses`,console.log("url",r),this.http.get(r)}getCourse(e){return this.http.get(`${this._baseUrl}/api/courses/${e}`)}addCourse(e){return this.http.post(`${this._baseUrl}/api/courses`,e)}deleteCourse(e){return this.http.delete(`${this._baseUrl}/api/courses/${e}`)}editCourse(e){return console.log(e),this.http.put(`${this._baseUrl}/api/courses/${e._id}`,e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(v.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function C(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",18),t._UZ(1,"input",19),t.TgZ(2,"button",20),t.NdJ("click",function(){const a=t.CHM(e).index,f=t.oxw();return t.KtG(f.eliminarRepo(a))}),t._uU(3," Eliminar "),t.qZA()()}if(2&o){const e=i.index;t.xp6(1),t.Q6J("formControlName",e)}}let _=(()=>{class o{constructor(e,r,u){this.fb=e,this.courseService=r,this.router=u,this.miFormulario=this.fb.group({title:["sdfd"],certificate:["sdfd"],link:["ddsfdsfsf"],repo:this.fb.array([["nc"]]),description:["dfds"],instructor:["dsfsf"],image:["dsfdsfd"]}),this.nuevoRepo=this.fb.control("")}get repoArr(){return this.miFormulario.get("repo")}ngOnInit(){}guardar(){this.courseService.addCourse(this.miFormulario.value).subscribe(r=>{console.log(r),this.router.navigate(["/courses/list"])})}agregarRepo(){this.repoArr.push(this.fb.control(this.nuevoRepo.value,n.kI.required)),this.nuevoRepo.reset()}eliminarRepo(e){this.repoArr.removeAt(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.qu),t.Y36(d),t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add"]],decls:53,vars:3,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","title","placeholder","Title",1,"form-control"],["type","text","formControlName","certificate","placeholder","Certificate",1,"form-control"],["type","text","formControlName","link","placeholder","Link",1,"form-control"],[1,"input-group"],["type","text","placeholder","Agregar repo",1,"form-control",3,"formControl","keyup.enter"],["type","button",1,"btn","btn-outline-primary",3,"click"],["formArrayName","repo",1,"col-sm-9"],["class","input-group mb-1",4,"ngFor","ngForOf"],["type","textarea","formControlName","description","placeholder","Description",1,"form-control"],["type","text","formControlName","instructor","placeholder","Instructor",1,"form-control"],["type","text","formControlName","image","placeholder","Image",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"input-group","mb-1"],[1,"form-control",3,"formControlName"],[1,"btn","btn-outline-danger",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Add course"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"form",2),t.NdJ("ngSubmit",function(){return r.guardar()}),t.TgZ(6,"div",3)(7,"label",4),t._uU(8,"Title"),t.qZA(),t.TgZ(9,"div",5),t._UZ(10,"input",6),t.qZA()(),t.TgZ(11,"div",3)(12,"label",4),t._uU(13,"Certificate"),t.qZA(),t.TgZ(14,"div",5),t._UZ(15,"input",7),t.qZA()(),t.TgZ(16,"div",3)(17,"label",4),t._uU(18,"Link"),t.qZA(),t.TgZ(19,"div",5),t._UZ(20,"input",8),t.qZA()(),t.TgZ(21,"div",3)(22,"label",4),t._uU(23,"Add repo"),t.qZA(),t.TgZ(24,"div",5)(25,"div",9)(26,"input",10),t.NdJ("keyup.enter",function(){return r.agregarRepo()}),t.qZA(),t.TgZ(27,"button",11),t.NdJ("click",function(){return r.agregarRepo()}),t._uU(28," Agregar "),t.qZA()()()(),t.TgZ(29,"div",3)(30,"label",4),t._uU(31,"Listado de repos"),t.qZA(),t.TgZ(32,"div",12),t.YNc(33,C,4,1,"div",13),t.qZA()(),t.TgZ(34,"div",3)(35,"label",4),t._uU(36,"Description"),t.qZA(),t.TgZ(37,"div",5),t._UZ(38,"input",14),t.qZA()(),t.TgZ(39,"div",3)(40,"label",4),t._uU(41,"Instructor"),t.qZA(),t.TgZ(42,"div",5),t._UZ(43,"input",15),t.qZA()(),t.TgZ(44,"div",3)(45,"label",4),t._uU(46,"Image"),t.qZA(),t.TgZ(47,"div",5),t._UZ(48,"input",16),t.qZA()(),t.TgZ(49,"div",0)(50,"div",1)(51,"button",17),t._uU(52," Guardar "),t.qZA()()()()()()),2&e&&(t.xp6(5),t.Q6J("formGroup",r.miFormulario),t.xp6(21),t.Q6J("formControl",r.nuevoRepo),t.xp6(7),t.Q6J("ngForOf",r.repoArr.controls))},dependencies:[c.sg,n._Y,n.Fj,n.JJ,n.JL,n.oH,n.sg,n.u,n.CE]}),o})();var g=s(3900),b=s(4850);function A(o,i){if(1&o&&(t.TgZ(0,"p")(1,"a",9),t._uU(2),t.qZA()()),2&o){const e=i.$implicit;t.xp6(1),t.s9C("href",e,t.LSH),t.xp6(1),t.Oqu(e)}}function T(o,i){if(1&o&&(t.TgZ(0,"div")(1,"h3")(2,"b"),t._uU(3,"REPO"),t.qZA()(),t.YNc(4,A,3,2,"p",8),t.qZA()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.repo)}}let U=(()=>{class o{constructor(e,r,u){this.activatedRoute=e,this.courseService=r,this.router=u,this.course=[],this.title="",this.description="",this.certificate="",this.link="",this.instructor="",this.repo=[],this.image=""}ngOnInit(){this.activatedRoute.params.pipe((0,g.w)(({id:e})=>this.courseService.getCourse(e))).subscribe(e=>{console.log(e),this.course=e,this.title=e[0].title,this.instructor=e[0].instructor,this.description=e[0].description,this.link=e[0].link,this.certificate=e[0].certificate,this.repo=e[0].repo,this.image=e[0].image})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.gz),t.Y36(d),t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-detail"]],decls:44,vars:7,consts:[[1,"text-center"],[1,"container"],[1,"row"],[1,"col-sm"],["target","blanck_1",3,"href"],["target","blanck_2",3,"href"],[4,"ngIf"],["title","image","width","250px",3,"src"],[4,"ngFor","ngForOf"],["target","blanck_3",3,"href"]],template:function(e,r){1&e&&(t._UZ(0,"br"),t.TgZ(1,"div",0)(2,"h1"),t._uU(3," COURSE DETAIL"),t.qZA()(),t._UZ(4,"hr"),t.TgZ(5,"div",1)(6,"div",2)(7,"div",3)(8,"h3")(9,"b"),t._uU(10,"TITLE"),t.qZA()(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t._UZ(13,"BR"),t.TgZ(14,"h3")(15,"b"),t._uU(16,"INSTRUCTOR"),t.qZA()(),t.TgZ(17,"p"),t._uU(18),t.qZA(),t._UZ(19,"br"),t.TgZ(20,"h3")(21,"b"),t._uU(22,"LINK"),t.qZA()(),t.TgZ(23,"p")(24,"a",4),t._uU(25,"Link"),t.qZA()(),t._UZ(26,"BR"),t.TgZ(27,"h3")(28,"b"),t._uU(29,"DESCRIPTION"),t.qZA()(),t.TgZ(30,"p"),t._uU(31),t.qZA(),t._UZ(32,"br"),t.TgZ(33,"h3")(34,"b"),t._uU(35,"CERTIFICATE"),t.qZA()(),t.TgZ(36,"p")(37,"a",5),t._uU(38,"Certificate"),t.qZA()(),t._UZ(39,"br"),t.YNc(40,T,5,1,"div",6),t.qZA(),t.TgZ(41,"div",3),t._UZ(42,"img",7),t.qZA()()(),t._UZ(43,"mat-divider")),2&e&&(t.xp6(12),t.Oqu(r.title),t.xp6(6),t.Oqu(r.instructor),t.xp6(6),t.s9C("href",r.link,t.LSH),t.xp6(7),t.hij("",r.description," "),t.xp6(6),t.s9C("href",r.certificate,t.LSH),t.xp6(3),t.Q6J("ngIf",r.repo.length>0),t.xp6(2),t.s9C("src",r.image,t.LSH))},dependencies:[c.sg,c.O5,b.d]}),o})();function x(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",18),t._UZ(1,"input",19),t.TgZ(2,"button",20),t.NdJ("click",function(){const a=t.CHM(e).index,f=t.oxw();return t.KtG(f.eliminarRepo(a))}),t._uU(3," Eliminar "),t.qZA()()}if(2&o){const e=i.index;t.xp6(1),t.Q6J("formControlName",e)}}let y=(()=>{class o{constructor(e,r,u,a){this.fb=e,this.courseService=r,this.router=u,this.activatedRoute=a,this.miFormulario=this.fb.group({_id:[],title:[],certificate:[],link:[],repo:this.fb.array([]),description:[],instructor:[],image:[]}),this.nuevoRepo=this.fb.control(""),this.course=[]}get repoArr(){return this.miFormulario.get("repo")}ngOnInit(){this.activatedRoute.params.pipe((0,g.w)(({id:e})=>this.courseService.getCourse(e))).subscribe(e=>{console.log(e),this.course=e,this.miFormulario.reset({_id:this.course[0]._id,title:this.course[0].title,certificate:this.course[0].certificate,description:this.course[0].description,instructor:this.course[0].instructor,link:this.course[0].link,image:this.course[0].image}),this.course[0].repo.forEach(r=>this.repoArr.push(this.fb.control(r)))})}guardar(){this.courseService.editCourse(this.miFormulario.value).subscribe(r=>{console.log(r),this.router.navigate(["/courses/list"])})}agregarRepo(){this.repoArr.push(this.fb.control(this.nuevoRepo.value,n.kI.required)),this.nuevoRepo.reset()}eliminarRepo(e){this.repoArr.removeAt(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.qu),t.Y36(d),t.Y36(l.F0),t.Y36(l.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit"]],decls:53,vars:3,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","title","placeholder","Title",1,"form-control"],["type","text","formControlName","certificate","placeholder","Certificate",1,"form-control"],["type","text","formControlName","link","placeholder","Link",1,"form-control"],[1,"input-group"],["type","text","placeholder","Agregar repo",1,"form-control",3,"formControl","keyup.enter"],["type","button",1,"btn","btn-outline-primary",3,"click"],["formArrayName","repo",1,"col-sm-9"],["class","input-group mb-1",4,"ngFor","ngForOf"],["type","textarea","formControlName","description","placeholder","Description",1,"form-control"],["type","text","formControlName","instructor","placeholder","Instructor",1,"form-control"],["type","text","formControlName","image","placeholder","Image",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"input-group","mb-1"],[1,"form-control",3,"formControlName"],[1,"btn","btn-outline-danger",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Add course"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"form",2),t.NdJ("ngSubmit",function(){return r.guardar()}),t.TgZ(6,"div",3)(7,"label",4),t._uU(8,"Title"),t.qZA(),t.TgZ(9,"div",5),t._UZ(10,"input",6),t.qZA()(),t.TgZ(11,"div",3)(12,"label",4),t._uU(13,"Certificate"),t.qZA(),t.TgZ(14,"div",5),t._UZ(15,"input",7),t.qZA()(),t.TgZ(16,"div",3)(17,"label",4),t._uU(18,"Link"),t.qZA(),t.TgZ(19,"div",5),t._UZ(20,"input",8),t.qZA()(),t.TgZ(21,"div",3)(22,"label",4),t._uU(23,"Add repo"),t.qZA(),t.TgZ(24,"div",5)(25,"div",9)(26,"input",10),t.NdJ("keyup.enter",function(){return r.agregarRepo()}),t.qZA(),t.TgZ(27,"button",11),t.NdJ("click",function(){return r.agregarRepo()}),t._uU(28," Agregar "),t.qZA()()()(),t.TgZ(29,"div",3)(30,"label",4),t._uU(31,"Listado de repos"),t.qZA(),t.TgZ(32,"div",12),t.YNc(33,x,4,1,"div",13),t.qZA()(),t.TgZ(34,"div",3)(35,"label",4),t._uU(36,"Description"),t.qZA(),t.TgZ(37,"div",5),t._UZ(38,"input",14),t.qZA()(),t.TgZ(39,"div",3)(40,"label",4),t._uU(41,"Instructor"),t.qZA(),t.TgZ(42,"div",5),t._UZ(43,"input",15),t.qZA()(),t.TgZ(44,"div",3)(45,"label",4),t._uU(46,"Image"),t.qZA(),t.TgZ(47,"div",5),t._UZ(48,"input",16),t.qZA()(),t.TgZ(49,"div",0)(50,"div",1)(51,"button",17),t._uU(52," Guardar "),t.qZA()()()()()()),2&e&&(t.xp6(5),t.Q6J("formGroup",r.miFormulario),t.xp6(21),t.Q6J("formControl",r.nuevoRepo),t.xp6(7),t.Q6J("ngForOf",r.repoArr.controls))},dependencies:[c.sg,n._Y,n.Fj,n.JJ,n.JL,n.oH,n.sg,n.u,n.CE]}),o})();var q=s(7579),F=s(8372),m=s(1576),S=s(4859),p=s(3546);const N=function(o){return["/courses/detail",o]};let R=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-course-card"]],inputs:{course:"course"},decls:25,vars:9,consts:[["height","200px"],[2,"text-align","center","height","50px","margin-bottom","20px","line-height","170%"],[2,"text-align","center"],["title","image","height","100px",3,"src"],["target","blanck",3,"href"],["mat-button","","color","primary",3,"routerLink"]],template:function(e,r){1&e&&(t.TgZ(0,"mat-card")(1,"mat-card-header",0)(2,"div",1)(3,"mat-card-title"),t._uU(4),t.ALo(5,"uppercase"),t.qZA()(),t._UZ(6,"mat-card-subtitle"),t.qZA(),t._UZ(7,"br"),t.TgZ(8,"div",2),t._UZ(9,"img",3),t.qZA(),t._UZ(10,"br")(11,"br"),t.TgZ(12,"mat-card-content")(13,"p")(14,"strong"),t._uU(15,"INSTRUCTOR : "),t.qZA(),t._uU(16),t.qZA(),t.TgZ(17,"p")(18,"strong")(19,"a",4),t._uU(20,"LINK"),t.qZA()()()(),t.TgZ(21,"mat-card-actions")(22,"button",5),t._uU(23," Detail "),t.qZA()()(),t._UZ(24,"br")),2&e&&(t.xp6(4),t.Oqu(t.lcZ(5,5,r.course.title)),t.xp6(5),t.s9C("src",r.course.image,t.LSH),t.xp6(7),t.hij(" ",r.course.instructor," "),t.xp6(3),t.s9C("href",r.course.link,t.LSH),t.xp6(3),t.Q6J("routerLink",t.VKq(7,N,r.course._id)))},dependencies:[l.rH,S.lW,p.a8,p.dk,p.dn,p.n5,p.$j,p.hq,c.gd],styles:["imgs[_ngcontent-%COMP%]{height:50px;width:50px}"]}),o})();function L(o,i){if(1&o&&(t.TgZ(0,"div",7),t._UZ(1,"app-course-card",8),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Q6J("course",e)}}const k=[{path:"list",component:(()=>{class o{constructor(e){this.coursesService=e,this.courses=[],this.filteredCourses=[],this.searchSubject=new q.x}onSearchQueryInput(e){this.searchSubject.next(e.target.value?.trim())}ngOnInit(){this.coursesService.getCourses().subscribe(e=>this.filteredCourses=e),this.searchSubject.pipe((0,F.b)(100),(0,g.w)(e=>this.coursesService.getCourses(e))).subscribe(e=>this.filteredCourses=e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list"]],decls:16,vars:1,consts:[[1,"text-center"],[1,"d-flex","justify-content-between"],[1,"row"],[1,"col"],["type","text","placeholder","search","id","searchQuery",1,"form-control",3,"input"],["fxLayout","row wrap","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","20px"],["fxFlex","40","fxFlex.lg","20","fxFlx.sm","80",4,"ngFor","ngForOf"],["fxFlex","40","fxFlex.lg","20","fxFlx.sm","80"],[3,"course"]],template:function(e,r){1&e&&(t._UZ(0,"br"),t.TgZ(1,"div",0)(2,"h1")(3,"b"),t._uU(4,"COURSES AND SPECIALIZATIONS "),t.qZA()()(),t._UZ(5,"br"),t.TgZ(6,"div",1),t._UZ(7,"div"),t.TgZ(8,"div")(9,"div",2)(10,"div",3)(11,"input",4),t.NdJ("input",function(a){return r.onSearchQueryInput(a)}),t.qZA()()()()(),t._UZ(12,"br")(13,"br"),t.TgZ(14,"div",5),t.YNc(15,L,2,1,"div",6),t.qZA()),2&e&&(t.xp6(15),t.Q6J("ngForOf",r.filteredCourses))},dependencies:[c.sg,m.xw,m.SQ,m.Wh,m.yH,R],styles:[".mat-card[_ngcontent-%COMP%]{height:50%;display:flex;flex-direction:column}.card-block[_ngcontent-%COMP%]{height:100%}"]}),o})()},{path:"add",component:_},{path:"detail/:id",component:U},{path:"edit/:id",component:y},{path:"**",redirectTo:"list"}];let I=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(k),l.Bz]}),o})();var J=s(5823),O=s(8748);let E=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,I,l.Bz,n.u5,J.o9,O.q,n.UX]}),o})()}}]);