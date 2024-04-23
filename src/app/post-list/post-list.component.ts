import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts=[
    { 
      Id:1,title:"Title 1",Content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatem aliquam ducimus, tenetur molestiae maiores distinctio recusandae illo, non amet, hic iste libero esse sequi obcaecati reiciendis placeat atque quibusdam."
    },
    { 
      Id:2,title:"Title 2",Content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatem aliquam ducimus, tenetur molestiae maiores distinctio recusandae illo, non amet, hic iste libero esse sequi obcaecati reiciendis placeat atque quibusdam."
    },
    { 
      Id:3,title:"Title 3",Content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatem aliquam ducimus, tenetur molestiae maiores distinctio recusandae illo, non amet, hic iste libero esse sequi obcaecati reiciendis placeat atque quibusdam."
    },
    { 
      Id:4,title:"Title 4",Content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatem aliquam ducimus, tenetur molestiae maiores distinctio recusandae illo, non amet, hic iste libero esse sequi obcaecati reiciendis placeat atque quibusdam."
    },
    { 
      Id:5,title:"Title 5",Content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatem aliquam ducimus, tenetur molestiae maiores distinctio recusandae illo, non amet, hic iste libero esse sequi obcaecati reiciendis placeat atque quibusdam."
    },
    { 
      Id:6,title:"Title 6",Content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatem aliquam ducimus, tenetur molestiae maiores distinctio recusandae illo, non amet, hic iste libero esse sequi obcaecati reiciendis placeat atque quibusdam."
    },
    { 
      Id:7,title:"Title 7",Content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatem aliquam ducimus, tenetur molestiae maiores distinctio recusandae illo, non amet, hic iste libero esse sequi obcaecati reiciendis placeat atque quibusdam."
    },
    { 
      Id:8,title:"Title 8",Content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatem aliquam ducimus, tenetur molestiae maiores distinctio recusandae illo, non amet, hic iste libero esse sequi obcaecati reiciendis placeat atque quibusdam."
    },
]

  constructor() { }

  ngOnInit(): void {
  }

}
