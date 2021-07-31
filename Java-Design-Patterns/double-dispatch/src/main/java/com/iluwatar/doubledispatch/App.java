package com.iluwatar.doubledispatch;

import java.util.ArrayList;
import java.util.List;

/**
 * 
 * When a message with a parameter is sent to an object, the resultant behaviour is defined by the 
 * implementation of that method in the receiver. Sometimes the behaviour must also be determined 
 * by the type of the parameter.
 * 
 * One way to implement this would be to create multiple instanceof-checks for the methods parameter.
 * However, this creates a maintenance issue. When new types are added we would also need to change
 * the method's implementation and add a new instanceof-check. This violates the single responsibility
 * principle - a class should have only one reason to change.
 * 
 * Instead of the instanceof-checks a better way is to make another virtual call on the parameter
 * object. This way new functionality can be easily added without the need to modify existing
 * implementation (open-closed principle).
 * 
 * In this example we have hierarchy of objects (GameObject) that can collide to each other. Each
 * object has its own coordinates which are checked against the other objects' coordinates. If
 * there is an overlap, then the objects collide utilizing the Double Dispatch pattern.
 *
 */
public class App {
	
    public static void main( String[] args ) {
    	// initialize game objects and print their status
    	List<GameObject> objects = new ArrayList<>();
    	objects.add(new FlamingAsteroid(0, 0, 5, 5));
    	objects.add(new SpaceStationMir(1, 1, 2, 2));
    	objects.add(new Meteoroid(10, 10, 15, 15));
    	objects.add(new SpaceStationIss(12, 12, 14, 14));
    	objects.stream().forEach(o -> System.out.println(o));
    	System.out.println("");
    	
    	// collision check
    	objects.stream().forEach(o1 -> objects.stream().forEach(o2 -> { if (o1 != o2 && o1.intersectsWith(o2)) o1.collision(o2); } ));
    	System.out.println("");
    	
    	// output eventual object statuses
    	objects.stream().forEach(o -> System.out.println(o));
    	System.out.println("");
    }
}
