package com.iluwatar.bridge;

public class Excalibur extends BlindingMagicWeaponImp {

	@Override
	public void wieldImp() {
		System.out.println("wielding Excalibur");
	}

	@Override
	public void swingImp() {
		System.out.println("swinging Excalibur");
	}

	@Override
	public void unwieldImp() {
		System.out.println("unwielding Excalibur");
	}

	@Override
	public void blindImp() {
		System.out
				.println("bright light streams from Excalibur blinding the enemy");
	}

}
