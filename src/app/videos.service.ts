import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  public videos: any = [];

  constructor() { 
   this.videos= [{title: 'Redefining Storytelling', speaker: 'Rana Daggubati', videourl: 'https://www.youtube.com/embed/sNbGU_I9HWw'},
{title: 'The 3 Myths of the Indian Education System', speaker: 'Vinay Menon', videourl: 'https://www.youtube.com/embed/lT-Nxjo_X-o'},
{title: 'Broken English', speaker: 'Esha Manwani', videourl: 'https://www.youtube.com/embed/XqqIzCPUcgs'},
{title: 'Weaving the Future', speaker: 'Chinthakindi Mallesham', videourl: 'https://www.youtube.com/embed/qSpjfurPjus'},
{title: 'The science of relationships', speaker: 'Cathy Garner', videourl: 'https://www.youtube.com/embed/bP-bnmNFKwA'}
];
  }

  filterItems(searchTerm) {
    return this.videos.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
