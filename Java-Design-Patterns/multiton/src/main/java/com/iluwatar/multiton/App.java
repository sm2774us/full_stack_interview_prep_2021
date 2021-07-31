package com.iluwatar.multiton;

/**
 * 
 * Whereas Singleton design pattern introduces single globally
 * accessible object the Multiton pattern defines many globally
 * accessible objects. The client asks for the correct instance 
 * from the Multiton by passing an enumeration as parameter.
 * 
 * In this example Nazgul is the Multiton and we can ask single
 * Nazgul from it using NazgulName. The Nazguls are statically
 * initialized and stored in concurrent hash map.
 *
 */
public class App {
	
    public static void main( String[] args ) {
    	System.out.println("KHAMUL=" + Nazgul.getInstance(NazgulName.KHAMUL));
    	System.out.println("MURAZOR=" + Nazgul.getInstance(NazgulName.MURAZOR));
    	System.out.println("DWAR=" + Nazgul.getInstance(NazgulName.DWAR));
    	System.out.println("JI_INDUR=" + Nazgul.getInstance(NazgulName.JI_INDUR));
    	System.out.println("AKHORAHIL=" + Nazgul.getInstance(NazgulName.AKHORAHIL));
    	System.out.println("HOARMURATH=" + Nazgul.getInstance(NazgulName.HOARMURATH));
    	System.out.println("ADUNAPHEL=" + Nazgul.getInstance(NazgulName.ADUNAPHEL));
    	System.out.println("REN=" + Nazgul.getInstance(NazgulName.REN));
    	System.out.println("UVATHA=" + Nazgul.getInstance(NazgulName.UVATHA));    	
    }
}
