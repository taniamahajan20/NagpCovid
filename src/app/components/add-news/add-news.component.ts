import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  @Output() public newsAdded = new EventEmitter<boolean>();
  public image: string | ArrayBuffer;
  newsForm: FormGroup;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.newsForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      news: new FormGroup({
        headlines: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        summary: new FormControl('', Validators.required),
        fullNews: new FormControl('', Validators.required),
        image: new FormControl(),
      })
    });
  }

  onSubmit() {
    this.newsForm.value.news.image = this.image;
    this.dataService.postNews(this.newsForm.value.news).subscribe((res) => {
      console.log(res);
    });
    this.newsAdded.emit();
  }
  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image = reader.result;
      };
    }
  }

}
