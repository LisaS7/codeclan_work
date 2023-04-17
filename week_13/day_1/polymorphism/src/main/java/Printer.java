public class Printer implements IConnect {

    public String print(String data){
        return "printing: " + data;
    }

    @Override
    public String connect(String networkName) {
        return "Connecting to network: " + networkName;
    }
}