const markAsRead = document.getElementById("mark-as-read");
const notifNum = document.getElementById("notif-num");
const notifs = document.getElementsByClassName("notifications");
let isRead = false;

document.addEventListener("click", toggleRead);

function toggleRead() {
    if (isRead) {
        for (let i=0; i<notifs.length; i++) {
            notifs[i].classList.toggle("unread");
            notifs[i].classList.toggle("bg-secondary");
            const elem = document.getElementById(`n-${i+1}-icon`);
            elem.classList.toggle("red-dot")
        }
        notifNum.textContent = notifs.length;
        markAsRead.textContent = "Mark all as read";
    } else {
        for (let i=0; i<notifs.length; i++) {
            if (notifs[i].classList.contains("unread")) {
                notifs[i].classList.toggle("unread");
                notifs[i].classList.toggle("bg-secondary");
                const elem = document.getElementById(`n-${i+1}-icon`);
                elem.classList.toggle("red-dot")    
            }
    
        }
    
        const unread = document.getElementsByClassName(".unread")
        notifNum.textContent = unread.length;
        markAsRead.textContent = "Mark all as unread";
    
    }

    isRead = !isRead;
}