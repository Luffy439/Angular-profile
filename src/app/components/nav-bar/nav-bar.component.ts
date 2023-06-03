import { Component } from '@angular/core';
export interface Iroutes{
  image: string,
  title: string,
}
  const routes: Iroutes[] = [{
image: 'jjkkj',
title:'Home',
},
{
  image: 'jjjhjj',
title:'Profile',
  },
  {
    image: 'jjjkkk',
title:'Messages',
  },
   {
    image: 'jjllj',
title:'Purchases',
   },
  {
    image: 'jj;;;j',
  title:'Returns',
        },
        {
          image: 'jjyyj',
 title:'Gallery',
 },
 {
  image: 'jjxxj',
  title:'Analytics',
  },
    {
      image: 'jccjj',
 title:'Settings',
          },
]
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',

})

export class NavBarComponent {

rotess = routes.map((item)=> item )


}

  

