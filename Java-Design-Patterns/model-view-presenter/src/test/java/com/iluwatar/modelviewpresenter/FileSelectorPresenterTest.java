package com.iluwatar.modelviewpresenter;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import com.iluwatar.modelviewpresenter.FileLoader;
import com.iluwatar.modelviewpresenter.FileSelectorPresenter;
import com.iluwatar.modelviewpresenter.FileSelectorStub;

/**
 * This test case is responsible for testing our application by taking advantage
 * of the Model-View-Controller architectural pattern.
 */
public class FileSelectorPresenterTest {

	/**
	 * The Presenter component.
	 */
	private FileSelectorPresenter presenter;

	/**
	 * The View component, implemented this time as a Stub!!!
	 */
	private FileSelectorStub stub;

	/**
	 * The Model component.
	 */
	private FileLoader loader;

	/**
	 * Initializes the components of the test case.
	 */
	@Before
	public void setUp() {
		this.stub = new FileSelectorStub();
		this.loader = new FileLoader();
		presenter = new FileSelectorPresenter(this.stub);
		presenter.setLoader(loader);
	}

	/**
	 * Tests if the Presenter was successfully connected with the View.
	 */
	@Test
	public void wiring() {
		presenter.start();

		assertNotNull(stub.getPresenter());
		assertTrue(stub.isOpened());
	}

	/**
	 * Tests if the name of the file changes.
	 */
	@Test
	public void updateFileNameToLoader() {
		String EXPECTED_FILE = "Stamatis";
		stub.setFileName(EXPECTED_FILE);

		presenter.start();
		presenter.fileNameChanged();

		assertEquals(EXPECTED_FILE, loader.getFileName());
	}

	/**
	 * Tests if we receive a confirmation when we attempt to open a file that
	 * it's name is null or an empty string.
	 */
	@Test
	public void fileConfirmationWhenNameIsNull() {
		stub.setFileName(null);

		presenter.start();
		presenter.fileNameChanged();
		presenter.confirmed();

		assertFalse(loader.isLoaded());
		assertEquals(1, stub.getMessagesSent());
	}

	/**
	 * Tests if we receive a confirmation when we attempt to open a file that it
	 * doesn't exist.
	 */
	@Test
	public void fileConfirmationWhenFileDoesNotExist() {
		stub.setFileName("RandomName.txt");

		presenter.start();
		presenter.fileNameChanged();
		presenter.confirmed();

		assertFalse(loader.isLoaded());
		assertEquals(1, stub.getMessagesSent());
	}

	/**
	 * Tests if we can open the file, when it exists.
	 */
	@Test
	public void fileConfirmationWhenFileExists() {
		stub.setFileName("etc/data/test.txt");
		presenter.start();
		presenter.fileNameChanged();
		presenter.confirmed();

		assertTrue(loader.isLoaded());
		assertTrue(stub.dataDisplayed());
	}

	/**
	 * Tests if the view closes after cancellation.
	 */
	@Test
	public void cancellation() {
		presenter.start();
		presenter.cancelled();

		assertFalse(stub.isOpened());
	}
}
