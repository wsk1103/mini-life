<%@ page contentType="picture/jpeg" import="java.awt.*,
java.awt.image.*,java.util.*,javax.imageio.*" %>
<%! 
Color getRandColor(int fc,int bc) 
{ 
Random random = new Random(); 
if(fc>255) fc=255; 
if(bc>255) bc=255; 
int r=fc+random.nextInt(bc-fc); 
int g=fc+random.nextInt(bc-fc); 
int b=fc+random.nextInt(bc-fc); 
return new Color(r,g,b); 
} 
%> 
<% 
//out.clear();//这句针对resin服务器，如果是tomacat可以不要这句
response.setHeader("Pragma","No-cache"); 
response.setHeader("Cache-Control","no-cache"); 
response.setDateHeader("Expires", 0); 
int width=100, height=35; 
BufferedImage picture = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
Graphics g = picture.getGraphics();
Random random = new Random(); 
g.setColor(getRandColor(200,250)); 
g.fillRect(0, 0, width, height); 
g.setFont(new Font("Times New Roman",Font.PLAIN,22)); 
g.setColor(getRandColor(160,200)); 
for (int i=0;i<155;i++) 
{ 
int x = random.nextInt(width); 
int y = random.nextInt(height); 
int xl = random.nextInt(12); 
int yl = random.nextInt(12); 
g.drawLine(x,y,x+xl,y+yl); 
} 
char[] CHARS = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
		'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ,
		'a','b','c','d','e','f','g','h','i','j','k','m',
		'n','p','q','r','s','t','u','v','w','x','y','z'};
String sRand=""; 
for (int i=0;i<4;i++){ 
String rand=String.valueOf(CHARS[random.nextInt(CHARS.length)]); 
sRand+=rand; 
g.setColor(new Color(20+random.nextInt(110),20+random.nextInt(110),20+random.nextInt(110))); 
g.drawString(rand,13*i+19,24); 
} 
// 将认证码存入SESSION 
sRand=sRand.toLowerCase();
session.setAttribute("rand",sRand); 
g.dispose(); 
ImageIO.write(picture, "JPEG", response.getOutputStream());
%>