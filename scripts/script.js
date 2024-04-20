const member1 = document.getElementById('member1');
const member2 = document.getElementById('member2');
const member3 = document.getElementById('member3');
const member4 = document.getElementById('member4');

const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');

const popupPhoto = document.getElementById('popupPhoto');
const popupName = document.getElementById('popupName'); 
const popupUni = document.getElementById('popupUni');
const popupSchool = document.getElementById('popupSchool');
const popupEmail = document.getElementById('popupEmail');
const popupPhone = document.getElementById('popupPhone');

const popupBio = document.getElementById('popupBio');

const members = {
    Kanan: {
        name: "Kanan Gurbanli",
        photo: '<img src="./images/members/Kanan.jpg" alt="Kanan">',
        uni: "Student of ADA University",
        school: "BS in Information Technology",
        email: "Email: kgurbanli15744@ada.edu.az",
        phone: "Phone: (+994)55-777-00-65",
        bio: "Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut.Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut."
    },
    Murad: {
        name: "Murad Tariverdiyev",
        photo: '<img src="./images/members/Murad.jpg" alt="Murad">',
        uni: "Student of ADA University",
        school: "BS in Computer Science",
        email: "Email: mtariverdiyev19957@ada.edu.az",
        phone: "Phone: (+994)50-447-90-61",
        bio: "Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut.Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut."

    },
    Aykhan: {
        name: "Aykhan Hasanov",
        photo: '<img src="./images/members/Aykhan.jpg" alt="Aykhan">',
        uni: "Student of ADA University",
        school: "BS in Information Technology",
        email: "Email: kgurbanli15744@ada.edu.az",
        phone: "Phone: +994 55 777 00 65",
        bio: "Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut.Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut."

    },
    Davud: {
        name: "Davud Jabrayil-zada",
        photo: '<img src="./images/members/Davud.jpg" alt="Davud">',
        uni: "Student of ADA University",
        school: "BS in Information Technology",
        email: "Email: dzada19612@ada.edu.az",
        phone: "Phone: (+994)51-799-55-00",
        bio: "Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut.Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut. Aliqua qui dolore ut aliquip commodo laboris. Excepteur aliquip ex dolore incididunt veniam nostrud proident sit proident commodo minim dolore mollit. Aute reprehenderit est dolore cupidatat velit aliqua laboris mollit esse. Mollit sint sint ipsum sit et est ut."
    }
}



member1.addEventListener('click', () => {
    popup.style.display = 'block';
    popupPhoto.innerHTML = members.Kanan.photo;
    popupName.innerHTML = members.Kanan.name;
    popupUni.innerHTML = members.Kanan.uni;
    popupSchool.innerHTML = members.Kanan.school;
    popupEmail.innerHTML = members.Kanan.email;
    popupPhone.innerHTML = members.Kanan.phone;
    popupBio.innerHTML = members.Kanan.bio;

});

member2.addEventListener('click', () => {
    popup.style.display = 'block';
    popupPhoto.innerHTML = members.Murad.photo;
    popupName.innerHTML = members.Murad.name;
    popupUni.innerHTML = members.Murad.uni;
    popupSchool.innerHTML = members.Murad.school;
    popupEmail.innerHTML = members.Murad.email;
    popupPhone.innerHTML = members.Murad.phone;
    popupBio.innerHTML = members.Murad.bio;
});

member3.addEventListener('click', () => {
    popup.style.display = 'block';
    popupPhoto.innerHTML = members.Aykhan.photo;
    popupName.innerHTML = members.Aykhan.name;
    popupUni.innerHTML = members.Aykhan.uni;
    popupSchool.innerHTML = members.Aykhan.school;
    popupEmail.innerHTML = members.Aykhan.email;
    popupPhone.innerHTML = members.Aykhan.phone;
    popupBio.innerHTML = members.Aykhan.bio;
});

member4.addEventListener('click', () => {
    popup.style.display = 'block';
    popupPhoto.innerHTML = members.Davud.photo;
    popupName.innerHTML = members.Davud.name;
    popupUni.innerHTML = members.Davud.uni;
    popupSchool.innerHTML = members.Davud.school;
    popupEmail.innerHTML = members.Davud.email;
    popupPhone.innerHTML = members.Davud.phone;
    popupBio.innerHTML = members.Davud.bio;
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});