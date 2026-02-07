import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkReusableTablesComponent } from '../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [SharedModule,NgbModule,SpkReusableTablesComponent],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent {
  userColumns=[
    {header:'User',field:'User',tableHeadColumn:'wd-lg-8p'},
    {header:'',field:'',tableHeadColumn:'wd-lg-20p'},
    {header:'Created',field:'Created',tableHeadColumn:'wd-lg-20p'},
    {header:'Status',field:'Status',tableHeadColumn:'wd-lg-20p'},
    {header:'Email',field:'Email',tableHeadColumn:'wd-lg-20p'},
    {header:'Action',field:'Action',tableHeadColumn:'wd-lg-20p'},
  ]
users=[
  {
    id:1,
src:"./assets/images/faces/1.jpg",
name:"Megan Peters",
date:'08/06/2020',
mail:"mila@kunis.com",
bg:"gray-300",
bg1:'text-muted',
status:"Inactive"
},
{
  id:2,
  src:"./assets/images/faces/2.jpg",
  name:"George Clooney",
  date:'12/06/2020',
  mail:"marlon@brando.com",
  bg:"success",
  bg1:"text-success",
  status:"Active"
  },  {
    id:3,
    src:"./assets/images/faces/3.jpg",
    name:"Ryan Gossling",
    date:'14/06/2020',
    mail:"jack@nicholson",
    bg:"danger",
    bg1:"text-danger",
    status:"Banned"
    },
    {
      id:4,
      src:"./assets/images/faces/1.jpg",
      name:"Emma Watson",
      date:'16/06/2020',
      mail:"jack@nicholsonm",
      bg:"warning",
      bg1:"text-warning",
      status:"Pending"
      },

        {
          id:6,
          src:"./assets/images/faces/12.jpg",
          name:"Mila Kunis",
          date:'18/06/2020',
          mail:"mila@kunis.com",
          bg:"gray-300",
          bg1:'text-muted',
          status:"Inactive"
          },
          {
            id:7,
            src:"./assets/images/faces/4.jpg",
            name:"Phil Watson",
            date:'23/06/2020',
            mail:"phil@watson.com",
            bg:"success",
            bg1:"text-success",
            status:"active"
            },
            {
              id:8,
              src:"./assets/images/faces/5.jpg",
              name:"Sonia Robertson",
              date:'25/06/2020',
              mail:"robertson@sonia.com",
              bg:"success",
              bg1:"text-success",
              status:"active"
              },
              {
                id:9,
                src:"./assets/images/faces/7.jpg",
                name:"Adam Hamilton",
                date:'31/06/2020',
                mail:"mila@kunis.com",
                bg:"danger",
                bg1:"text-danger",
                status:"Banned"
                },
                {
                  id:10,
                  src:"./assets/images/faces/9.jpg",
                  name:"Leah Morgan",
                  date:'02/07/2020',
                  mail:"morganleah@.com",
                  bg:"warning",
                  bg1:"text-warning",
                  status:"Pending"
                  },
                  {
                    id:11,
                    src:"./assets/images/faces/11.jpg",
                    name:"Amelia McDonalds",
                    date:'08/07/2020',
                    mail:"amelia23@kunis.com",
                    bg:"success",
                    bg1:"text-success",
                    status:"active"
                    },
                    {
                      id:12,
                      src:"./assets/images/faces/6.jpg",
                      name:"Paul Molive",
                      date:'12/07/2020',
                      mail:"paul45@kunis.com",
                      bg:"success",
                      bg1:"text-success",
                      status:"active"
                      }
]
close(id:number){
  const data = this.users.filter((x: { id: number }) => x.id !== id);
  this.users = data;
}
}
