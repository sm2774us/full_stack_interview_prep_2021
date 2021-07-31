package com.iluwatar.lazyloading;

import java.util.function.Supplier;

/**
 * 
 * This lazy loader is thread safe and more efficient than HolderThreadSafe.
 * It utilizes Java 8 functional interface Supplier<T> as Heavy factory.
 *
 */
public class Java8Holder {
	
	private Supplier<Heavy> heavy = () -> createAndCacheHeavy();
	
	public Java8Holder() {
		System.out.println("Java8Holder created");
	}

	public Heavy getHeavy() {
		return heavy.get();
	}
	
	private synchronized Heavy createAndCacheHeavy() {
		class HeavyFactory implements Supplier<Heavy> {
			private final Heavy heavyInstance = new Heavy();
			@Override
			public Heavy get() { return heavyInstance; }
		}
		if (!HeavyFactory.class.isInstance(heavy)) {
			heavy = new HeavyFactory();
		}
		return heavy.get();
	}
}
