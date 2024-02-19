export class AppSettings {    
    
/*
    public static API_PASARELA = "https://pasarela.ikeasistencia.com/Prod/";  //Url productiva  genera token
    public static API_ZONAPAGOS= "https://zonapagos.ikeasistencia.com/Prod/"; //Url productiva para la pasarela de compensar
    public static API_BACK = "https://compensar.ikeasistencia.com/";//Url productiva para back compensar
    public static API_CORREOS = "https://apihub.ikeasistencia.com/apicorreos/";//Url productiva para correos compensar
    public static CODIGOZONAPSE = 32417; //codigo pse zona de pagos
    public static CODIGOZONATARJETA = 31411; //codigo TC zona de pagos
    public static CODIGODESERVICIO = 1002; //codigo TC zona de pagos


    public static USERTOKEN ="compensar_prod"; //codigo TC zona de pagos
    public static PASSWORDTOKEN = "z1jfBXU%GqOO"; //codigo TC zona de pagos
    
*/    
    
    ////////////////////////////////////////////
    //////CREDENCIALES DE QA //////////////////
    //////////////////////////////////////////

        
    public static API_PASARELA = "https://pasarela-qa.dev-pruebas.com/Stage/";  // genera token
    public static API_ZONAPAGOS = "https://zonapagos-qa.dev-pruebas.com/Stage/";//QA
    public static API_BACK = "https://compensar.dev-pruebas.com/";//QA
    public static API_CORREOS = "https://apihub.ikeasistencia.com/apicorreos/";//QA
    public static CODIGOZONAPSE = 32443; //codigo pse zona de pagos QA
    public static CODIGOZONATARJETA = 30582; //codigo TC zona de pagos QA
    public static CODIGODESERVICIO = 2701; //codigo TC zona de pagos
    public static USERTOKEN ="compensar_dev"; //codigo TC zona de pagos
    public static PASSWORDTOKEN = "LqCWnZQN@15*"; //codigo TC zona de pagos
    
    
    
   
}