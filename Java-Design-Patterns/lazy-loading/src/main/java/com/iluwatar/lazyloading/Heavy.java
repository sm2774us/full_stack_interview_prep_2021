package com.iluwatar.lazyloading;

/**
 * 
 * Heavy objects are expensive to create.
 *
 */
public class Heavy {

	public Heavy() {
		System.out.println("Creating Heavy ...");
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		System.out.println("... Heavy created");
	}
}
