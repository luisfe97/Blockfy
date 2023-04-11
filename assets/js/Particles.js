var SEPARATION = 100,
        AMOUNTX = 100,
        AMOUNTY = 70;
 
    var container;
    var camera2, scene2, renderer2;
 
    var particles2, particle2, count = 0;
 
    var mouseX = 85,
        mouseY = -342;
 
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    
 
    container = document.createElement('div');
    document.body.appendChild(container);

    camera2 = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
    camera2.position.z = 1000;

    scene2 = new THREE.Scene();

    particles2 = new Array();

    var PI2 = Math.PI * 2;
    var material2 = new THREE.ParticleCanvasMaterial({

        color: 0x808080,
        program: function(context) {

            context.beginPath();
            context.arc(0, 0, .6, 0, PI2, true);
            context.fill();

        }

    });

    var i = 0;

    for (var ix = 0; ix < AMOUNTX; ix++) {

        for (var iy = 0; iy < AMOUNTY; iy++) {

            particle2 = particles2[i++] = new THREE.Particle(material2);
            particle2.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
            particle2.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
            scene2.add(particle2);

        }

    }

    renderer2 = new THREE.CanvasRenderer();
    renderer2.setSize(window.innerWidth, window.innerHeight);
    $('.animation').append(renderer2.domElement);

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);

    //

    window.addEventListener('resize', onWindowResize, false);

    animate();
 


 
    function onWindowResize() {
 
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
 
        camera2.aspect = window.innerWidth / window.innerHeight;
        camera2.updateProjectionMatrix();
 
        renderer2.setSize(window.innerWidth, window.innerHeight);
 
    }
 
    //
 
    function onDocumentMouseMove(event) {
 
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
 
    }
 
    function onDocumentTouchStart(event) {
 
        if (event.touches.length === 1) {
 
            event.preventDefault();
 
            mouseX = event.touches[0].pageX - windowHalfX;
            mouseY = event.touches[0].pageY - windowHalfY;
 
        }
 
    }
 
    function onDocumentTouchMove(event) {
 
        if (event.touches.length === 1) {
 
            event.preventDefault();
 
            mouseX = event.touches[0].pageX - windowHalfX;
            mouseY = event.touches[0].pageY - windowHalfY;
 
        }
 
    }
 
    //
 
    function animate() {
 
        requestAnimationFrame(animate);
 
        render();
 
 
    }
 
    function render() {
 
        camera2.position.x += (mouseX - camera2.position.x) * .05;
        camera2.position.y += (-mouseY - camera2.position.y) * .05;
        camera2.lookAt(scene2.position);
 
        var i = 0;
 
        for (var ix = 0; ix < AMOUNTX; ix++) {
 
            for (var iy = 0; iy < AMOUNTY; iy++) {
 
                particle2 = particles2[i++];
                particle2.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
                particle2.scale.x = particle2.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;
 
            }
 
        }
 
        renderer2.render(scene2, camera2);
 
        count += 0.1;
 
    }