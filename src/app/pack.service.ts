import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PackService {
  packname="";
  packdesc="";
  accountStatus="Inactive";
  HathaYogaThen ="Hatha Yoga";
  HathaYogaS ="Hatha Yoga, considered a gentler form of Yoga, comprises of basic introductory poses in which you're required to hold each pose for a few breaths.It's important to be empty stomach to practice yoga, trying remaining quite and silent while practicing it.";
  VinyasaYogaM="Vinyasa Yoga";
  VinyasaYogaNa="Vinyasa Yoga helps in developing a flow in your body while practicing Yoga by linking movement with breath. It can lead to rise in your heart rate as the pace is bound to increase with each pose. It focuses on synchronizing the breath with a continuous flow of postures improving our blood circulation.";
  IyengarYoga="Iyengar Yoga";
  IyengarYo="The poses are for longer periods as they help you align your body posture in the right way. It's therapeutic for several conditions and helps in cultivating strength and flexibility. Toned muscles, pain relief from different joints of the body."
  AshtangaYoga="Ashtanga Yoga";
  AshtangaYo="Ashtanga Yoga is only for those looking for a challenging and orderly approach to yoga.It means - eight limbs or branches of yoga which are - Yama - moral codes, Niyama -self-purification and study, Asana - posture, Pranayama - breath control. "
  KundaliniYoga="Kundalini Yoga";
  KundaliniYo=" Kundalini Yoga includes performing repetitive physical exercises coupled with intense breath work while chanting and meditating. It releases the untapped energy which resides within you, providing a sense of self-awareness. It's also a blend of bhakti yoga.";
  BikramYo="Bikram Yoga helps in increasing blood flow, and helps in improving posture, balance, and mobility.Practice this series of 26 poses and 2 breathing exercises in a room heated to around 105 degrees and 40% humidity and get drenched in sweat.";
  BikramYoga="Bikram Yoga";
  stbath=1000;
  pt=2000;
  dplan=500;
  name=localStorage.getItem("loggedusername");
  namee=localStorage.getItem("loggedusernamee");
  gender=localStorage.getItem("loggedusergen");
  age=localStorage.getItem("loggeduserage");
  

  constructor(public http:HttpClient,public rooter: Router) { 
    console.log("service created");
  }
  HathaYogaSBuy(){
    this.packname=this.HathaYogaThen ;
    localStorage.setItem("packna", this.packname);
    this.packdesc=this.HathaYogaS;
    localStorage.setItem("packds",this.packdesc);
    this.rooter.navigateByUrl("/cart")
   }
  VinyasaYogaMBuy(){
    this.packname=this.VinyasaYogaM;
    localStorage.setItem("packna", this.packname);
    this.packdesc=this.VinyasaYogaNa;
    localStorage.setItem("packds",this.packdesc);
    this.rooter.navigateByUrl("/cart")
  }
  IyengarYogaBuy(){
    this.packname=this.IyengarYo;
    localStorage.setItem("packna", this.packname);
    this.packdesc=this.IyengarYoga;
    localStorage.setItem("packds",this.packdesc);
    this.rooter.navigateByUrl("/cart")
  }
  AshtangaYogaBuy(){
    this.packname=this.AshtangaYo;
    localStorage.setItem("packna", this.packname);
    this.packdesc=this.AshtangaYoga;
    localStorage.setItem("packds",this.packdesc);
    this.rooter.navigateByUrl("/cart")
  }
  BikramYogaBuy(){
    this.packname=this.BikramYoga;
    localStorage.setItem("packna", this.packname);
    this.packdesc=this.BikramYo;
    localStorage.setItem("packds",this.packdesc);
    this.rooter.navigateByUrl("/cart")
  }
  KundaliniYogaBuy(){
    this.packname=this.KundaliniYoga;
    localStorage.setItem("packna", this.packname);
    this.packdesc=this.KundaliniYo;
    localStorage.setItem("packds",this.packdesc);
    this.rooter.navigateByUrl("/cart")
  }
  
  

}
