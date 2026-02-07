import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { Editor, NgxEditorModule, Toolbar, Validators } from 'ngx-editor';
import { DROPZONE_CONFIG, DropzoneComponent, DropzoneConfigInterface, DropzoneDirective, DropzoneModule } from 'ngx-dropzone-wrapper';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpkNgSelectComponent } from "../../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component";
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  acceptedFiles: 'image/*,application/pdf,.doc,.docx,.txt',
  createImageThumbnails: true
};
@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [SharedModule, NgSelectModule, NgxEditorModule, DropzoneModule, FormsModule, ReactiveFormsModule, SpkNgSelectComponent],
  providers:[  {
    provide: DROPZONE_CONFIG,
    useValue: DEFAULT_DROPZONE_CONFIG
  }],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  public type: string = 'component';

  public disabled: boolean = false;

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 100,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };
  
  @ViewChild(DropzoneComponent, { static: false }) componentRef?: DropzoneComponent;
  @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;
  constructor(private formBuilder: FormBuilder) {
    this.editorContent = this.formBuilder.group({});
  }
  category=[
  {label:'Select',value:1},
  {label:'Fashion',value:2},
  {label:'Life Style',value:3},
  {label:'Science',value:4},
  {label:'Health',value:5},
  {label:'Humanities',value:6},
  {label:'Business',value:7},
  {label:'Marketing',value:8},
]
 
  // ngx-editor
  public editorContent!: FormGroup;
  editordoc = '';
  public editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form: any = new FormGroup({
    editorContent: new FormControl(
      { value: 'Type Text Here', disabled: false },
      Validators.required()
    ),
  });


  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled1(): void {
    this.disabled = !this.disabled;
  }
  public resetDropzoneUploads(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.reset();
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.reset();
    }
  }

  public onUploadInit(args: any): void {
  }

  public onUploadError(args: any): void {
  }

  public onUploadSuccess(args: any): void {
  }
  ngOnInit() {
    this.editor = new Editor();
  }
}
