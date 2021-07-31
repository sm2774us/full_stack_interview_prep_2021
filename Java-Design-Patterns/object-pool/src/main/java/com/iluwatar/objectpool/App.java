package com.iluwatar.objectpool;

/**
 * 
 * When it is necessary to work with a large number of objects that are particularly expensive to instantiate 
 * and each object is only needed for a short period of time, the performance of an entire application may be 
 * adversely affected. An object pool design pattern may be deemed desirable in cases such as these. 
 * 
 * The object pool design pattern creates a set of objects that may be reused. When a new object is needed, it 
 * is requested from the pool. If a previously prepared object is available it is returned immediately, avoiding 
 * the instantiation cost. If no objects are present in the pool, a new item is created and returned. When the 
 * object has been used and is no longer needed, it is returned to the pool, allowing it to be used again in the 
 * future without repeating the computationally expensive instantiation process. It is important to note that 
 * once an object has been used and returned, existing references will become invalid.
 * 
 * In this example we have created OliphauntPool inheriting from generic ObjectPool. Oliphaunts can be checked
 * out from the pool and later returned to it. The pool tracks created instances and their status (available,
 * inUse).
 *
 */
public class App {
	
    public static void main( String[] args ) {
    	OliphauntPool pool = new OliphauntPool();
    	System.out.println(pool);
    	Oliphaunt oliphaunt1 = pool.checkOut();
    	System.out.println("Checked out " + oliphaunt1);
    	System.out.println(pool);
    	Oliphaunt oliphaunt2 = pool.checkOut();
    	System.out.println("Checked out " + oliphaunt2);
    	Oliphaunt oliphaunt3 = pool.checkOut();
    	System.out.println("Checked out " + oliphaunt3);
    	System.out.println(pool);
    	System.out.println("Checking in " + oliphaunt1);
    	pool.checkIn(oliphaunt1);
    	System.out.println("Checking in " + oliphaunt2);
    	pool.checkIn(oliphaunt2);
    	System.out.println(pool);
       	Oliphaunt oliphaunt4 = pool.checkOut();
    	System.out.println("Checked out " + oliphaunt4);
       	Oliphaunt oliphaunt5 = pool.checkOut();
    	System.out.println("Checked out " + oliphaunt5);
    	System.out.println(pool);
    }
}
