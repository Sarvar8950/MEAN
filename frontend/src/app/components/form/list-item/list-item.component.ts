import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  page: number = 0
  limit: number = 5
  allItems: any = []
  totalPage: number = 0

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllListItem()
  }

  setLimitFun(event: any) {
    this.limit = +event.target.value
    this.getAllListItem()
  }
  
  setPageFun(num: any) {
    this.page += num
    this.getAllListItem()
  }

  getAllListItem() {
    let userDetails = JSON.parse(sessionStorage.getItem("userDetails") || "")
    let payload = {
      email: userDetails.email,
      page: this.page,
      limit: this.limit
    }
    console.log(payload)
    fetch('http://localhost:8000/getAllItem', {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        "Authorization": userDetails.token
      }
    }).then(res => res.json())
      .then(res => {
        if (res.data.length > 0) {
          this.totalPage = res.data[0].totalRecords
          this.allItems = res.data
        } else {
          this.totalPage = 0
          this.allItems = []
        }
      }).catch(err => {
        console.log(err)
      })
  }

  editItem(ele: any) {
    // console.log(ele)
    sessionStorage.setItem("editTodo", JSON.stringify(ele))
    this.router.navigate(["/addTodos"])
  }

  deleteItem(ele: any) {
    let userDetails = JSON.parse(sessionStorage.getItem("userDetails") || '')
    // console.log(ele)
    fetch(`http://localhost:8000/deleteitem/${ele._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": userDetails.token
      }
    }).then(res => res)
      .then(res => {
        console.log(res)
        this.getAllListItem()
      }).catch(err => console.log(err))
  }
}
