package com.iluwatar.executearound;

import java.io.File;
import java.io.IOException;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.iluwatar.executearound.App;

/**
 * 
 * Tests execute-around example.
 *
 */
public class AppTest {
	
	@Test
	public void test() throws IOException {
		String[] args = {};
		App.main(args);
	}
	
	@Before
	@After
	public void cleanup() {
		File file = new File("testfile.txt");
		file.delete();
	}
}
