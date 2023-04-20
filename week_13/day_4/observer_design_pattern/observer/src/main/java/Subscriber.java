public class Subscriber implements ISubscribe {
    private String notification;

    public void update(Video video, String message) {
        this.notification = message + " " + video;
    }

    public String getNotification() {
        return notification;
    }
}
