import { Component,OnChanges,
  SimpleChanges,DoCheck,AfterContentInit,
  AfterContentChecked, AfterViewInit,
  AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges,
DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,
AfterViewChecked,OnDestroy {
  serverElements = [];

  constructor(){
    console.log('Server Constructor');
  }
  ngOnDestroy(): void {
    console.log('On Destroy')
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewCheck')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('Server ngAfterContentInit');

  }
  ngDoCheck(): void {
    console.log('Server ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Server ngOnChanges');
    console.log(changes);
  }
  ngOnInit() {
    console.log('Server ngOnInit')
  }
  onAddServer(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onAddBlueprint(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
}
