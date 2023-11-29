package org.project;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import javax.mail.*;
import javax.mail.search.SubjectTerm;
import java.io.FileOutputStream;
import java.util.Properties;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class App {

    private static final String SERVER_HOST = "imap.gmail.com";
    private static final String EMAIL_ADDRESS = "manish2022job@gmail.com";
    private static final String EMAIL_PASSWORD = "your_email_password";
    private static final int PORT = 993;
    private static final String SPECIFIC_SUBJECT = "Specific Subject";

    public static void main(String[] args) {
        Properties properties = new Properties();
        properties.setProperty("mail.store.protocol", "imaps");
        properties.setProperty("mail.imaps.host", SERVER_HOST);
        properties.setProperty("mail.imaps.port", String.valueOf(PORT));

        try {
            // Connect to the email server
            Session session = Session.getInstance(properties, null);
            Store store = session.getStore();
            store.connect(SERVER_HOST, EMAIL_ADDRESS, EMAIL_PASSWORD);

            // Access the inbox folder
            Folder inbox = store.getFolder("INBOX");
            inbox.open(Folder.READ_ONLY);

            // Search for specific emails with the given subject
            Message[] messages = inbox.search(new SubjectTerm(SPECIFIC_SUBJECT));

            // Create a new Excel workbook
            Workbook workbook = new XSSFWorkbook();

            // Create a worksheet
            Sheet worksheet = workbook.createSheet("Outlook Extracted Data");

            // Headers for the Data
            String[] headers = {"No.", "メール送信者", "メール件名", "紹介会社", "名前", "読み仮名", "国籍", "応募日", "住所", "年齢",
                    "日本語能力", "経験", "現在の年収", "希望の年収", "最低希望年収", "コメント", "ステータス", "書類審査", "一次面接日",
                    "二次面接日", "内定日", "入社日"};

            // Write headers in the first row
            Row headerRow = worksheet.createRow(0);
            for (int i = 0; i < headers.length; i++) {
                headerRow.createCell(i).setCellValue(headers[i]);
            }

            int rowNum = 1;
            int number = 1;

            for (Message message : messages) {
                try {
                    String emailSender = message.getFrom()[0].toString();
                    String emailSubject = message.getSubject();
                    Object content = message.getContent();
                    
                    // Handle email content based on its type
                    String emailBody = extractEmailBody(content);

                    // Process email body using regular expression pattern
                    Pattern pattern = Pattern.compile("([^\\s:]+)\\s*:\\s*(.*?)\\s", Pattern.DOTALL);
                    Matcher matcher = pattern.matcher(emailBody);

                    Row row = worksheet.createRow(rowNum++);

                    // Iterate through matches and set the values in Excel cells
                    int columnNum = 2;
                    while (matcher.find()) {
                        row.createCell(0).setCellValue(number++);
                        row.createCell(1).setCellValue(emailSender);
                        row.createCell(2).setCellValue(emailSubject);
                        String headerValue = matcher.group(1).trim();
                        row.createCell(columnNum++).setCellValue(headerValue);
                    }

                    // Mark the message as read
                    message.setFlag(Flags.Flag.SEEN, true);
                } catch (Exception e) {
                    // Handle specific exceptions (e.g., IOException, MessagingException) here
                    e.printStackTrace();
                }
            }

            // Save the workbook to a physical file on the disk
            String filePath = "C:/Users/" + System.getProperty("user.name") + "/Downloads/output.xlsx";

            try (FileOutputStream fileOutputStream = new FileOutputStream(filePath)) {
                workbook.write(fileOutputStream);
                System.out.println("Excel file has been created successfully at: " + filePath);
            } catch (Exception e) {
                System.out.println("Error occurred while saving the Excel file: " + e.getMessage());
            }

            // Close resources
            store.close();
        } catch (Exception e) {
            // Handle generic exceptions (e.g., NoSuchProviderException, MessagingException) here
            e.printStackTrace();
        }
    }

    // Extracts email body content as a string
    private static String extractEmailBody(Object content) throws Exception {
        if (content instanceof Multipart) {
            // Handle Multipart content
            Multipart multipart = (Multipart) content;
            StringBuilder emailBody = new StringBuilder();
            for (int i = 0; i < multipart.getCount(); i++) {
                BodyPart bodyPart = multipart.getBodyPart(i);
                emailBody.append(bodyPart.getContent().toString());
            }
            return emailBody.toString();
        } else {
            // Handle plain text or HTML content
            return content.toString();
        }
    }
}
