import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  ngOnInit () {
    //type of the obseervable. of <=(send one at time.)and from <= is for array if the static no object.
    of(2,4,8).subscribe(console.log);
    from([20,5,10,5]).subscribe(
      item => console.log(`resulting item' ${item}`),
      err => console.log(`error occurres ${err}`),
      () => console.log('Console Comapleeme')
    );
    // `` <= this back for the template 
  }
}
/**
 * map(item => uitem *2)
 * us it to make changes in the 
 *streams as goes throught.
 use map if you want to change it itrm from streams

 *  -this passes through all of the operators.
 * of(2,4,6)
 *   .pipe(
 *    map(item => item*2),
 *    map(item => item -3)
 * ).subscribe <= this will process each number like 2 will be mutiply by 2 and -3 this it will be notfied.
 *             | <= this is finish
 * ---2---4----6---->  <= this 
 *             |
 * source
 * each is subribe
 * map(item => *2)
 * 
 *             |
 * ---4---8----12----> <= this is 
 *             |
 * the output stream
 * straihg tline indicate stream have finished.
 * 
 * 
 *  --------TAP-------
 *  this does not effect the streams
 *  - used for Debugging.
 *  add it to the first thing. usally for console.log
 * 
 * tap is utility operator.
 *    -subscribe it 
 *     -provides a side effect operation thaty does not change the it's output value
 * 
 *  
 * -------------Take
 * 
 * 
 * 
 * 
 */
