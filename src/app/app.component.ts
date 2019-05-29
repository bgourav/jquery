import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jquerytask';

  public ngOnInit()
  {
    $(document).ready(function(){
      $(".del").click(function(){
        $(this).parent().parent().css("background-color", "red"),
        setTimeout(()=>{
          $(this).parent().parent().animate({
            opacity:"0.2"
          }, () => {
            $(this).parent().parent().remove();
          })
        },1000);
      });
    });
    

  }

} 
