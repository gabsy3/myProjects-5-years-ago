import { Injectable } from '@angular/core';
import { boards } from './boards.model';
@Injectable({
  providedIn: 'root'
})
export class SurfboardsService {
  surfboards: boards[];
  constructor() {
    this.surfboards = [];
    this.initSurfboards();
  }
  initSurfboards(): void {
    this.surfboards = [
      {
        id: 1,
        title: `Aloha - Frankensled PU`,
        desc: `ה-Frankensled של גלשני Aloha, הגלשן הזה עובד מדהים בימים חלשים.
         מתאים מאד לגולשים חזקים שרוצים גלשן פרפורמנס שיעבוד להם חזק בימים נמוכים.
        הוא נותן הרבה דרייב וכוח בפניות גם ב-30 חלש של הקיץ
        .מומלץ לקחת אותו 4 אינצים מתחת לשורטבורד שלכם. `,
        img: '../assets/images/boards/Aloha-Frankensled.png',
        price: 2500,
        totalItems: 10
      },
      {
        id: 2,
        title: `Chilli – Grom Plus 5050 Carbon`,
        desc: `ה – Grom Plus של Chilli, והפעם בטכנולוגיה החדשה 5050 Carbon Epoxy.
        5050, הוא גלשן בנויי EPS ללא שידרית עץ, ציפוי אינגרה בתחתית , 
        פיברגלס דו סיבי וסרף אפוקסי.`,
        img: '../assets/images/boards/Chilli-Grom-5050-Carbon-Epoxy.jpg',
        price: 2300,
        totalItems: 5
      },
      {
        id: 3,
        title: `Chilli – Grom Plus 5050 Carbon`,
        desc: `ה – Grom Plus של Chilli, והפעם בטכנולוגיה החדשה 5050 Carbon Epoxy.
        5050, הוא גלשן בנויי EPS ללא שידרית עץ, ציפוי אינגרה בתחתית , 
        פיברגלס דו סיבי וסרף אפוקסי.`,
        img: '../assets/images/boards/Chilli-Grom-5050-Carbon-Epoxy.jpg',
        price: 2300,
        totalItems: 5
      },
      {
        id: 3,
        title: `Chilli – Grom Plus 5050 Carbon`,
        desc: `ה – Grom Plus של Chilli, והפעם בטכנולוגיה החדשה 5050 Carbon Epoxy.
        5050, הוא גלשן בנויי EPS ללא שידרית עץ, ציפוי אינגרה בתחתית , 
        פיברגלס דו סיבי וסרף אפוקסי.`,
        img: '../assets/images/boards/Chilli-Grom-5050-Carbon-Epoxy.jpg',
        price: 2300,
        totalItems: 5
      },
      {
        id: 3,
        title: `Chilli – Grom Plus 5050 Carbon`,
        desc: `ה – Grom Plus של Chilli, והפעם בטכנולוגיה החדשה 5050 Carbon Epoxy.
        5050, הוא גלשן בנויי EPS ללא שידרית עץ, ציפוי אינגרה בתחתית , 
        פיברגלס דו סיבי וסרף אפוקסי.`,
        img: '../assets/images/boards/Chilli-Grom-5050-Carbon-Epoxy.jpg',
        price: 2300,
        totalItems: 5
      },
      {
        id: 3,
        title: `Chilli – Grom Plus 5050 Carbon`,
        desc: `ה – Grom Plus של Chilli, והפעם בטכנולוגיה החדשה 5050 Carbon Epoxy.
        5050, הוא גלשן בנויי EPS ללא שידרית עץ, ציפוי אינגרה בתחתית , 
        פיברגלס דו סיבי וסרף אפוקסי.`,
        img: '../assets/images/boards/Chilli-Grom-5050-Carbon-Epoxy.jpg',
        price: 2300,
        totalItems: 5
      },
      {
        id: 3,
        title: `Chilli – Grom Plus 5050 Carbon`,
        desc: `ה – Grom Plus של Chilli, והפעם בטכנולוגיה החדשה 5050 Carbon Epoxy.
        5050, הוא גלשן בנויי EPS ללא שידרית עץ, ציפוי אינגרה בתחתית , 
        פיברגלס דו סיבי וסרף אפוקסי.`,
        img: '../assets/images/boards/Chilli-Grom-5050-Carbon-Epoxy.jpg',
        price: 2300,
        totalItems: 5
      },
      {
        id: 3,
        title: `Chilli – Grom Plus 5050 Carbon`,
        desc: `ה – Grom Plus של Chilli, והפעם בטכנולוגיה החדשה 5050 Carbon Epoxy.
        5050, הוא גלשן בנויי EPS ללא שידרית עץ, ציפוי אינגרה בתחתית , 
        פיברגלס דו סיבי וסרף אפוקסי.`,
        img: '../assets/images/boards/Chilli-Grom-5050-Carbon-Epoxy.jpg',
        price: 2300,
        totalItems: 5
      },
      {
        id: 3,
        title: `Chilli – Grom Plus 5050 Carbon`,
        desc: `ה – Grom Plus של Chilli, והפעם בטכנולוגיה החדשה 5050 Carbon Epoxy.
        5050, הוא גלשן בנויי EPS ללא שידרית עץ, ציפוי אינגרה בתחתית , 
        פיברגלס דו סיבי וסרף אפוקסי.`,
        img: '../assets/images/boards/Chilli-Grom-5050-Carbon-Epoxy.jpg',
        price: 2300,
        totalItems: 5
      },
      {
        id: 3,
        title: `Chilli – Grom Plus 5050 Carbon`,
        desc: `ה – Grom Plus של Chilli, והפעם בטכנולוגיה החדשה 5050 Carbon Epoxy.
        5050, הוא גלשן בנויי EPS ללא שידרית עץ, ציפוי אינגרה בתחתית , 
        פיברגלס דו סיבי וסרף אפוקסי.`,
        img: '../assets/images/boards/Chilli-Grom-5050-Carbon-Epoxy.jpg',
        price: 2300,
        totalItems: 5
      }
    ]
  }
  getboards(): boards[] {
    return this.surfboards;
  }
}
