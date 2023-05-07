import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  todoForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  editMode: any = null

  ngOnInit() {
    this.editMode = null
    this.todoForm.reset()

    if (sessionStorage.getItem("editTodo")) {
      let editData = JSON.parse(sessionStorage.getItem("editTodo") || "")
      console.log(editData)
      if (editData) {
        this.todoForm.patchValue({
          title: editData.title,
          email: editData.email,
          description: editData.description
        })
        this.editMode = editData._id
        sessionStorage.removeItem("editTodo")
      }
    }

  }

  submit() {
    this.todoForm.patchValue({ time: new Date() })
    console.log(this.todoForm.value)
    let userDetails = JSON.parse(sessionStorage.getItem("userDetails") || "")
    let payload;
    if (this.editMode) {
      payload = {
        ...this.todoForm.value,
        _id: this.editMode,
        time: new Date()
      }
    } else {
      payload = {
        ...this.todoForm.value,
        email: userDetails.email,
        time: new Date()
      }
    }
    // console.log(payload)
    if (this.editMode) {
      delete payload.totalRecords
      fetch('http://localhost:8000/edititem', {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          "Authorization": userDetails.token
        }
      }).then(res => res)
        .then(res => {
          // console.log(res)
          this.todoForm.reset()
          this.editMode = null
        }).catch(err => {
          console.log(err)
        })
    } else {
      fetch('http://localhost:8000/additem', {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          "Authorization": userDetails.token
        }
      }).then(res => res.json())
        .then(res => {
          // console.log(res)
          this.todoForm.reset()
          this.editMode = null
        }).catch(err => {
          console.log(err)
        })
    }
  }

  clear() {
    this.todoForm.reset()
  }
}
