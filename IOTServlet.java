

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.logging.Level;
import java.util.logging.Logger;
import uts.wsd.iot.SSHExec;

public class IOTServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;
    private String message;
        
    public IOTServlet() {
        super();
    }

    @Override
    public void init() throws ServletException {
        // Do required initialization
        message = "IOT Servlet Initiated";
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        SSHExec ssh = new SSHExec();        
        
        int numThreads = 5;
        ExecutorService executor = Executors.newFixedThreadPool(numThreads);
        Runnable turnLedOn = () -> {
            try {
                ssh.fireCommand("sudo python blink.py");
            } catch (Exception ex) {
                Logger.getLogger(IOTServlet.class.getName()).log(Level.SEVERE, null, ex);
            }
        };
        Runnable motionsensorTask = () -> {
            try {
                ssh.readMotionSensor();
                
            } catch (Exception ex) {
                Logger.getLogger(IOTServlet.class.getName()).log(Level.SEVERE, null, ex);
            }
        };
        Runnable startLEDTask = () -> {
            try {
                ssh.startLED();
            } catch (Exception ex) {
                Logger.getLogger(IOTServlet.class.getName()).log(Level.SEVERE, null, ex);
            }
        };
        Runnable stopLEDTask = () -> {
            try {
                ssh.stopLED();
            } catch (Exception ex) {
                Logger.getLogger(IOTServlet.class.getName()).log(Level.SEVERE, null, ex);
            }
        };
        if (request.getParameter("ledon") != null) {
            executor.execute(turnLedOn);
        } else if (request.getParameter("iotdata") != null) {
            executor.execute(motionsensorTask);
        } else if (request.getParameter("ioton") != null) {
            executor.execute(startLEDTask);
        }else if (request.getParameter("iotoff") != null) {
            executor.execute(stopLEDTask);
        }    
        executor.shutdown();
        request.getRequestDispatcher("index.html").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
        request.getRequestDispatcher("index.html").forward(request, response);

    }

}
