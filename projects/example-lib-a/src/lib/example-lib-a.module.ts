import { NgModule } from '@angular/core';
import { ExampleLibAComponent } from './example-lib-a.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: "", component: ExampleLibAComponent},
    ])
  ],
  declarations: [ExampleLibAComponent],
  exports: [ExampleLibAComponent]
})
export class ExampleLibAModule {}
